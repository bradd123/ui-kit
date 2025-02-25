// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// This file is created with 'yarn generate-icons'.
// Original SVG file: src/svg/view-grid-plus.react.svg

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

const SvgViewGridPlus = (props: Props) => (
  <svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      id="view-grid-plus_react_svg__Page-1"
      stroke="none"
      strokeWidth={1}
      fill="none"
      fillRule="evenodd"
    >
      <g
        id="view-grid-plus_react_svg__Component-/-icon-/-24px-/-custom-dashboard"
        transform="translate(.5)"
        fill="#1A1A1A"
        fillRule="nonzero"
      >
        <path
          d="M11 13.9v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6a1 1 0 011-1h6a1 1 0 011 1zM11 4v6a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1h6a1 1 0 011 1zm10 0v6a1 1 0 01-1 1h-6a1 1 0 01-1-1V4a1 1 0 011-1h6a1 1 0 011 1z"
          id="view-grid-plus_react_svg__Rectangle-3"
        />
        <path
          d="M18 14v1.999h2A1.001 1.001 0 0120 18h-2v2a1 1 0 01-2 0v-2h-2a1 1 0 010-2h2v-2a1 1 0 012 0z"
          id="view-grid-plus_react_svg__Rectangle-2"
        />
      </g>
    </g>
  </svg>
);

SvgViewGridPlus.displayName = 'SvgViewGridPlus';

const ViewGridPlusIcon = (props: Props) => {
  const theme = useTheme();
  return <SvgViewGridPlus {...props} css={getIconStyles(props, theme)} />;
};

ViewGridPlusIcon.displayName = 'ViewGridPlusIcon';
export default ViewGridPlusIcon;
