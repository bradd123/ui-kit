// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// This file is created with 'yarn generate-icons'.
// Original SVG file: src/rich-text-body/icons/svg/bold.react.svg

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

const SvgBold = (props: Props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      id="bold_react_svg__Component-/-icon-/-24px-/-Richtext-/-Bold-"
      stroke="none"
      strokeWidth={1}
      fill="none"
      fillRule="evenodd"
    >
      <g
        id="bold_react_svg__Component-/-icon-/-16px-/-Richtext-/-Bold-"
        fill="#1A1A1A"
      >
        <path
          d="M6 3h5.599c2.55 0 4.403.363 5.555 1.089 1.153.726 1.729 1.88 1.729 3.464 0 1.074-.252 1.956-.757 2.645a3.023 3.023 0 01-2.012 1.243v.123c1.14.254 1.963.73 2.468 1.427.504.698.756 1.625.756 2.781 0 1.64-.592 2.92-1.778 3.84-1.185.918-2.795 1.377-4.83 1.377H6V3zm3.814 7.124h2.215c1.034 0 1.782-.16 2.246-.48.463-.32.695-.848.695-1.587 0-.689-.252-1.183-.757-1.482-.504-.3-1.302-.45-2.393-.45H9.814v4zm0 3.027v4.688H12.3c1.05 0 1.825-.2 2.326-.602.5-.402.75-1.018.75-1.846 0-1.493-1.066-2.24-3.199-2.24H9.814z"
          id="bold_react_svg__B"
        />
      </g>
    </g>
  </svg>
);

SvgBold.displayName = 'SvgBold';

const BoldIcon = (props: Props) => {
  const theme = useTheme();
  return <SvgBold {...props} css={getIconStyles(props, theme)} />;
};

BoldIcon.displayName = 'BoldIcon';
export default BoldIcon;
