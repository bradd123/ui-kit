// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// This file is created with 'yarn generate-icons'.
// Original SVG file: src/svg/verified.react.svg

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

const SvgVerified = (props: Props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        d="M4.71 15.682c.023-.212-.212-.527-.5-.776-.738-.643-1.21-1.627-1.21-2.73 0-1.135.503-2.143 1.28-2.785.292-.242.495-.612.45-.914a3.49 3.49 0 01-.041-.548c0-1.94 1.46-3.513 3.259-3.513.22 0 .439.024.648.07.353.077.77-.072 1.02-.362C10.21 3.432 11.059 3 12 3c.943 0 1.79.432 2.385 1.124.249.29.666.439 1.02.363a3 3 0 01.649-.071c1.8 0 3.257 1.573 3.257 3.513 0 .131-.007.261-.02.389-.023.212.213.527.499.776.738.643 1.21 1.627 1.21 2.73a3.626 3.626 0 01-1.036 2.563c-.269.27-.43.702-.37 1.05.037.205.055.418.055.634 0 1.94-1.46 3.513-3.257 3.513-.317 0-.622-.048-.91-.14a.926.926 0 00-.997.315C13.887 20.518 12.996 21 12 21c-.942 0-1.79-.432-2.383-1.124-.25-.29-.668-.439-1.021-.363-.21.047-.427.071-.648.071-1.8 0-3.26-1.573-3.26-3.513 0-.131.01-.261.022-.389zm10.978-6.574a.372.372 0 00-.524 0l-4.656 4.656a.372.372 0 01-.525 0l-1.147-1.146a.372.372 0 00-.525 0l-.703.703a.372.372 0 000 .525l2.375 2.374c.144.145.38.145.525 0l5.884-5.884a.372.372 0 000-.525l-.704-.703z"
        id="verified_react_svg__path-1"
      />
    </defs>
    <g
      id="verified_react_svg__Icons"
      stroke="none"
      strokeWidth={1}
      fillRule="evenodd"
    >
      <g id="verified_react_svg__MC-icon-set" transform="translate(-168 -312)">
        <g id="verified_react_svg__Notices" transform="translate(24 312)">
          <g id="verified_react_svg__Verified" transform="translate(144)">
            <mask id="verified_react_svg__mask-2" fill="#fff">
              <use xlinkHref="#verified_react_svg__path-1" />
            </mask>
            <use
              id="verified_react_svg__shape"
              xlinkHref="#verified_react_svg__path-1"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
);

SvgVerified.displayName = 'SvgVerified';

const VerifiedIcon = (props: Props) => {
  const theme = useTheme();
  return <SvgVerified {...props} css={getIconStyles(props, theme)} />;
};

VerifiedIcon.displayName = 'VerifiedIcon';
export default VerifiedIcon;
