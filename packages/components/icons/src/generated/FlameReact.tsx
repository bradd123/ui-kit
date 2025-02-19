// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// This file is created with 'yarn generate-icons'.
// Original SVG file: src/svg/flame.react.svg

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

const SvgFlame = (props: Props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      id="flame_react_svg__Icons"
      stroke="none"
      strokeWidth={1}
      fillRule="evenodd"
    >
      <g
        id="flame_react_svg__MC-icon-set"
        transform="translate(-96 -72)"
        fill="#000"
      >
        <g id="flame_react_svg__Application" transform="translate(24 24)">
          <g id="flame_react_svg__Flames" transform="translate(72 48)">
            <path
              d="M12.014 21C8.134 21 5 17.735 5 13.692c0-1.677.539-3.953 2.156-4.492 0 0 .266 2.208 1.617 3.347.173-1.857-1.1-7.42 4.305-9.547 0 3.414-.532 3.37 1.085 9 0-3.384.812-4.418 3.17-5.106-.03 3.264 1.667 4.372 1.667 6.768.029 4.073-3.105 7.338-6.986 7.338z"
              id="flame_react_svg__shape"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
);

SvgFlame.displayName = 'SvgFlame';

const FlameIcon = (props: Props) => {
  const theme = useTheme();
  return <SvgFlame {...props} css={getIconStyles(props, theme)} />;
};

FlameIcon.displayName = 'FlameIcon';
export default FlameIcon;
