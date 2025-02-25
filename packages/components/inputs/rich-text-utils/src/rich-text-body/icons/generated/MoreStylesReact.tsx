// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// This file is created with 'yarn generate-icons'.
// Original SVG file: src/rich-text-body/icons/svg/more-styles.react.svg

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

const SvgMoreStyles = (props: Props) => (
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
        d="M9.261 8.057a8.97 8.97 0 013.548.738l-.605 1.384c-1.128-.465-2.15-.697-3.066-.697-.806 0-1.415.126-1.825.38-.41.252-.615.6-.615 1.045 0 .301.077.557.23.77.155.211.402.413.744.604.342.192.998.469 1.969.83.355.13.68.26.974.39L13.5 13.5v1.25h-1.007c.368.462.552 1.023.552 1.684 0 1.046-.39 1.853-1.169 2.42-.78.567-1.873.851-3.281.851-1.49 0-2.652-.236-3.486-.707v-1.58c.54.274 1.119.49 1.738.646a7.258 7.258 0 001.789.236c.889 0 1.572-.142 2.05-.425.48-.284.719-.716.719-1.297 0-.438-.19-.812-.57-1.123-.255-.21-.673-.444-1.255-.704L4.5 14.75V13.5h2.164a4.444 4.444 0 01-.279-.168c-.44-.29-.769-.62-.984-.99-.215-.368-.323-.81-.323-1.322 0-.916.372-1.639 1.118-2.169.745-.53 1.767-.794 3.065-.794zm11.27 2.443c.127 0 .237.05.33.148.092.099.139.215.139.35a.492.492 0 01-.078.273l-.061.078-3.281 3.489a.438.438 0 01-.587.064l-.073-.064-3.28-3.49a.494.494 0 01-.14-.35c0-.135.046-.251.14-.35a.448.448 0 01.237-.139l.092-.009h6.562zm-7.076-7.094l.795 1.303.802-1.303h1.267l-1.333 2.003L16.381 7.5h-1.27l-.861-1.403-.864 1.403h-1.267l1.388-2.091-1.319-2.003h1.267z"
        id="more-styles_react_svg__path-1"
      />
    </defs>
    <g
      id="more-styles_react_svg__Component-/-icon-/-24px-/-Richtext-/-more-styles"
      stroke="none"
      strokeWidth={1}
      fill="none"
      fillRule="evenodd"
    >
      <g id="more-styles_react_svg__Component-/-icon-/-16px-/-Richtext-/-Strike-trough">
        <mask id="more-styles_react_svg__mask-2" fill="#fff">
          <use xlinkHref="#more-styles_react_svg__path-1" />
        </mask>
        <use
          id="more-styles_react_svg__Combined-Shape"
          fill="#1A1A1A"
          xlinkHref="#more-styles_react_svg__path-1"
        />
      </g>
    </g>
  </svg>
);

SvgMoreStyles.displayName = 'SvgMoreStyles';

const MoreStylesIcon = (props: Props) => {
  const theme = useTheme();
  return <SvgMoreStyles {...props} css={getIconStyles(props, theme)} />;
};

MoreStylesIcon.displayName = 'MoreStylesIcon';
export default MoreStylesIcon;
