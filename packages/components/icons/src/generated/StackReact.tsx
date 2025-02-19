// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// This file is created with 'yarn generate-icons'.
// Original SVG file: src/svg/stack.react.svg

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

const SvgStack = (props: Props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      id="stack_react_svg__Component-/-icon-/-24px-/-Stock"
      stroke="none"
      strokeWidth={1}
      fill="#1A1A1A"
      fillRule="evenodd"
    >
      <path
        d="M3.698 11.153l8.16 2.007a.548.548 0 00.262 0l8.16-2.007a.535.535 0 01.669.513v1.113a.53.53 0 01-.407.514l-8.422 2.071a.548.548 0 01-.261 0l-8.422-2.071a.53.53 0 01-.407-.514v-1.113c0-.344.328-.597.668-.513"
        id="stack_react_svg__Fill-1"
      />
      <path
        d="M3.698 15.56l8.16 2.009a.548.548 0 00.262 0l8.16-2.008c.34-.084.669.169.669.513v1.113a.53.53 0 01-.407.514l-8.553 2.104L3.437 17.7a.53.53 0 01-.407-.514v-1.113c0-.344.328-.597.668-.513"
        id="stack_react_svg__Fill-4"
      />
      <path
        d="M3.437 6.524l8.422-2.072a.543.543 0 01.26 0l8.422 2.072a.53.53 0 01.408.513v1.378a.53.53 0 01-.408.513L12.12 11a.548.548 0 01-.26 0L3.437 8.928a.53.53 0 01-.407-.513V7.037a.53.53 0 01.407-.513"
        id="stack_react_svg__Fill-7"
      />
    </g>
  </svg>
);

SvgStack.displayName = 'SvgStack';

const StackIcon = (props: Props) => {
  const theme = useTheme();
  return <SvgStack {...props} css={getIconStyles(props, theme)} />;
};

StackIcon.displayName = 'StackIcon';
export default StackIcon;
