import React from 'react';
import PropTypes from 'prop-types';
import requiredIf from 'react-required-if';
import { Link as ReactRouterLink } from 'react-router-dom';
import { css, useTheme } from '@emotion/react';
import { FormattedMessage } from 'react-intl';
import { customProperties as vars } from '@commercetools-uikit/design-system';
import { filterInvalidAttributes } from '@commercetools-uikit/utils';

const getLinkStyles = (props, theme) => {
  const overwrittenVars = {
    ...vars,
    ...theme,
  };

  return css`
    font-family: inherit;
    color: ${overwrittenVars.colorPrimary};
    font-size: ${overwrittenVars.fontSizeDefault};
    text-decoration: ${props.hasUnderline ? 'underline' : 'none'};

    &:hover,
    &:focus,
    &:active {
      color: ${overwrittenVars.colorPrimary25};
    }
  `;
};

const Link = (props) => {
  const remainingProps = filterInvalidAttributes(props);
  const theme = useTheme();
  if (props.isExternal) {
    return (
      <a
        css={getLinkStyles(props, theme)}
        href={props.to}
        target="_blank"
        rel="noopener noreferrer"
        {...remainingProps}
      >
        {props.intlMessage ? (
          <FormattedMessage {...props.intlMessage} />
        ) : (
          props.children
        )}
      </a>
    );
  }

  return (
    <ReactRouterLink
      css={getLinkStyles(props, theme)}
      to={props.to}
      {...remainingProps}
    >
      {props.intlMessage ? (
        <FormattedMessage {...props.intlMessage} />
      ) : (
        props.children
      )}
    </ReactRouterLink>
  );
};

Link.displayName = 'Link';

Link.propTypes = {
  hasUnderline: PropTypes.bool.isRequired,
  isExternal: PropTypes.bool.isRequired,
  to: requiredIf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        pathname: PropTypes.string.isRequired,
        search: PropTypes.string.isRequired,
        hash: PropTypes.string,
        state: PropTypes.object,
      }),
    ]),
    (props) => !props.isExternal
  ),
  intlMessage: requiredIf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      description: PropTypes.string,
      defaultMessage: PropTypes.string.isRequired,
    }),
    (props) => !React.Children.count(props.children)
  ),
  children: requiredIf(PropTypes.node, (props) => !props.intlMessage),
};

Link.defaultProps = {
  hasUnderline: true,
  isExternal: false,
};

export default Link;
