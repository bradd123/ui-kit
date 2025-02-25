// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// This file is created with 'yarn generate-icons'.
// Original SVG file: src/svg/pin-filled.react.svg

/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Theme } from '@emotion/react';
import React from 'react';
import { warning } from '@commercetools-uikit/utils';
import { css, useTheme } from '@emotion/react';
import { customProperties as vars } from '@commercetools-uikit/design-system';
type Props = {
  color?:
    | 'solid'
    | 'neutral60'
    | 'surface'
    | 'info'
    | 'primary'
    | 'primary40'
    | 'warning'
    | 'error';
  size?: 'small' | 'medium' | 'big' | 'scale';
};
const iconSizes = {
  small: 12,
  medium: 16,
  big: 24,
} as const;

const getSizeStyle = (size: Props['size']) => {
  switch (size) {
    case 'scale':
      return `
        &:not(:root) {
          width: 100%;
          height: auto;
        }
      `;

    case 'small':
    case 'medium':
    case 'big':
      return `
        width: ${iconSizes[size]}px;
        height: ${iconSizes[size]}px;
      `;

    default:
      return `
        width: ${iconSizes.big}px;
        height: ${iconSizes.big}px;
      `;
  }
};

const capitalize = (value: string) => value[0].toUpperCase() + value.slice(1);

const getColor = (color: Props['color'], theme: Theme) => {
  if (!color) return 'inherit';
  const overwrittenVars = { ...vars, ...theme }; // @ts-expect-error

  const iconColor = overwrittenVars[`color${capitalize(color)}`];

  if (!iconColor) {
    warning(
      color,
      `ui-kit/Icon: the specified color '${color}' is not supported.`
    );
    return 'inherit';
  }

  return iconColor;
};

const getIconStyles = (props: Props, theme: Theme) => css`
  * {
    fill: ${getColor(props.color, theme)};
  }
  ${getSizeStyle(props.size)};
  flex-shrink: 0;
`;

const SvgPinFilled = (props: Props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      id="pin-filled_react_svg__Icons"
      stroke="none"
      strokeWidth={1}
      fillRule="evenodd"
    >
      <g
        id="pin-filled_react_svg__MC-icon-set"
        transform="translate(-168 -744)"
        fill="#000"
      >
        <g id="pin-filled_react_svg__Actions" transform="translate(24 648)">
          <g id="pin-filled_react_svg__Pin" transform="translate(144 96)">
            <path
              d="M16.425 15.121c0-.928-.746-1.681-1.666-1.681h-.832V6.502a1.673 1.673 0 001.63-1.68H5.601c0 .93.745 1.682 1.665 1.682v6.936h-.833c-.92 0-1.665.753-1.665 1.681h4.996v6.516h1.665V15.12h4.996z"
              id="pin-filled_react_svg__shape"
              transform="rotate(35 10.596 13.23)"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
);

SvgPinFilled.displayName = 'SvgPinFilled';

const PinFilledIcon = (props: Props) => {
  const theme = useTheme();
  return <SvgPinFilled {...props} css={getIconStyles(props, theme)} />;
};

PinFilledIcon.displayName = 'PinFilledIcon';
export default PinFilledIcon;
