// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// This file is created with 'yarn generate-icons'.
// Original SVG file: src/svg/heart.react.svg

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

const SvgHeart = (props: Props) => (
  <svg
    id="heart_react_svg__Ebene_1"
    xmlns="http://www.w3.org/2000/svg"
    x={0}
    y={0}
    viewBox="0 0 24 24"
    xmlSpace="preserve"
    {...props}
  >
    <g id="heart_react_svg__MC-icon-set" transform="translate(-241 -1256)">
      <g id="heart_react_svg__Heart" transform="translate(241 1256)">
        <path
          id="heart_react_svg__shape"
          className="heart_react_svg__st0"
          d="M16 3.7c-1.7 0-3.3.9-4.1 2.4-.9-1.5-2.4-2.4-4-2.4-2.5 0-4.6 2.1-4.8 5 0 .1-.1.8.2 1.9.4 1.6 1.2 3 2.5 4.1l6.2 5.7 6.3-5.7c1.2-1.1 2.1-2.6 2.5-4.1.3-1.1.2-1.8.2-1.9-.4-3-2.5-5-5-5z"
        />
      </g>
    </g>
  </svg>
);

SvgHeart.displayName = 'SvgHeart';

const HeartIcon = (props: Props) => {
  const theme = useTheme();
  return <SvgHeart {...props} css={getIconStyles(props, theme)} />;
};

HeartIcon.displayName = 'HeartIcon';
export default HeartIcon;
