// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// This file is created with 'yarn generate-icons'.
// Original SVG file: src/svg/angle-left.react.svg

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

const SvgAngleLeft = (props: Props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      id="angle-left_react_svg__Icons"
      stroke="none"
      strokeWidth={1}
      fillRule="evenodd"
    >
      <g
        id="angle-left_react_svg__MC-icon-set"
        transform="translate(-24 -888)"
        fill="#000"
      >
        <g id="angle-left_react_svg__Directions" transform="translate(24 888)">
          <g id="angle-left_react_svg__Angle-Left">
            <path
              d="M20.816 8.091l-.902-.91A.567.567 0 0019.5 7a.567.567 0 00-.414.182l-7.087 7.146L4.91 7.182A.567.567 0 004.497 7a.567.567 0 00-.415.182l-.902.91a.576.576 0 000 .836l8.403 8.473c.12.122.259.182.415.182.156 0 .294-.06.414-.182l8.404-8.473a.577.577 0 000-.837z"
              id="angle-left_react_svg__shape"
              transform="rotate(90 11.998 12.292)"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
);

SvgAngleLeft.displayName = 'SvgAngleLeft';

const AngleLeftIcon = (props: Props) => {
  const theme = useTheme();
  return <SvgAngleLeft {...props} css={getIconStyles(props, theme)} />;
};

AngleLeftIcon.displayName = 'AngleLeftIcon';
export default AngleLeftIcon;
