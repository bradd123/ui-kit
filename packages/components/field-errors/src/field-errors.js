import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { ErrorMessage } from '@commercetools-uikit/messages';
import messages from './messages';

const isObject = (obj) => typeof obj === 'object';

const FieldErrors = (props) => {
  if (!props.isVisible) return null;
  if (!isObject(props.errors)) return null;

  return (
    <React.Fragment>
      {Object.entries(props.errors)
        // Only render errors which have truthy values, to avoid
        // rendering an error for, e.g. { missing: false }
        .filter(([, error]) => error)
        .map(([key, error]) => {
          // We might not use a custom error renderer, so we fall back to null
          // to enable the default errors to kick in
          const errorElement = props.renderError
            ? props.renderError(key, error)
            : null;
          // Render a custom error if one was provided.
          // Custom errors take precedence over the default errors
          if (errorElement)
            return <ErrorMessage key={key}>{errorElement}</ErrorMessage>;

          const defaultErrorElement = props.renderDefaultError
            ? props.renderDefaultError(key, error)
            : null;
          // Render a default error if one was provided.
          // Default errors take precedence over the known errors
          if (defaultErrorElement)
            return <ErrorMessage key={key}>{defaultErrorElement}</ErrorMessage>;

          // Try to see if we know this error and render that error instead then
          if (key === FieldErrors.errorTypes.MISSING)
            return (
              <ErrorMessage key={key}>
                <FormattedMessage {...messages.missingRequiredField} />
              </ErrorMessage>
            );
          if (key === FieldErrors.errorTypes.NEGATIVE)
            return (
              <ErrorMessage key={key}>
                <FormattedMessage {...messages.invalidNegativeNumber} />
              </ErrorMessage>
            );
          if (key === FieldErrors.errorTypes.FRACTIONS)
            return (
              <ErrorMessage key={key}>
                <FormattedMessage {...messages.invalidFractionalNumber} />
              </ErrorMessage>
            );
          // Render nothing in case the error is not known and no custom error
          // was returned
          return null;
        })}
    </React.Fragment>
  );
};

FieldErrors.displayName = 'FieldErrors';

FieldErrors.propTypes = {
  /**
   * List of errors. Only entries with truthy values will count as active errors.
   */
  errors: PropTypes.object,
  /**
   * `true` when the error messages should be rendered. Usually you'd pass in a `touched` state of fields.
   */
  isVisible: PropTypes.bool,
  /**
   * Function which gets called with each error key (from the `errors` prop) and may render an error message or return `null` to hand the error handling off to `renderDefaultError`.
   * <br />
   * Signature: `(key, error) => React.node`
   */
  renderError: PropTypes.func,
  /**
   * Function which gets called with each error key (from the `errors` prop) for which `renderError` returned `null`.
   * It may render an error message or return `null` to hand the error handling off to `FieldError`s built-in error handling.
   * <br />
   * Signature: `(key, error) => React.node`
   */
  renderDefaultError: PropTypes.func,
};

FieldErrors.errorTypes = {
  MISSING: 'missing',
  NEGATIVE: 'negative',
  FRACTIONS: 'fractions',
};

export default FieldErrors;
