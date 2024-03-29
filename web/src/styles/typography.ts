// Typography

// ___________________________________________________________________

import { css } from 'styled-components'
import theme from '../../config/theme'
import { darken } from 'polished'

// Aeonik Regular
import AeonikRegularEot from './fonts/AeonikRegular.eot'
import AeonikRegularWoff2 from './fonts/AeonikRegular.woff2'
import AeonikRegularWoff from './fonts/AeonikRegular.woff'
import AeonikRegularOtf from './fonts/AeonikRegular.otf'

// Aeonik Medium
import AeonikMediumEot from './fonts/Aeonik-Medium.eot'
import AeonikMediumWoff2 from './fonts/Aeonik-Medium.woff2'
import AeonikMediumWoff from './fonts/Aeonik-Medium.woff'
import AeonikMediumTtf from './fonts/Aeonik-Medium.ttf'

// Aeonik Bold
import AeonikBoldEot from './fonts/AeonikBold.eot'
import AeonikBoldWoff2 from './fonts/AeonikBold.woff2'
import AeonikBoldWoff from './fonts/AeonikBold.woff'
import AeonikBoldOtf from './fonts/AeonikBold.otf'

// Suisse Works Book
import SuisseWorksBookEot from './fonts/SuisseWorks-Book.eot'
import SuisseWorksBookWoff2 from './fonts/SuisseWorks-Book.woff2'
import SuisseWorksBookWoff from './fonts/SuisseWorks-Book.woff'
import SuisseWorksBookTtf from './fonts/SuisseWorks-Book.ttf'

// Suisse Works Bold
import SuisseWorksBoldEot from './fonts/SuisseWorks-Bold.eot'
import SuisseWorksBoldWoff2 from './fonts/SuisseWorks-Bold.woff2'
import SuisseWorksBoldWoff from './fonts/SuisseWorks-Bold.woff'
import SuisseWorksBoldTtf from './fonts/SuisseWorks-Bold.ttf'

// ___________________________________________________________________

const textCrop = (
  lineHeight = 1.3,
  topAdjustment = 0,
  bottomAdjustment = 0
) => {
  const topCrop = 8
  const bottomCrop = 8
  const cropFontSize = 36
  const cropLineHeight = 1.2

  const dynamicTopCrop =
    (topCrop + (lineHeight - cropLineHeight) * (cropFontSize / 2)) /
    cropFontSize

  const dynamicBottomCrop =
    (bottomCrop + (lineHeight - cropLineHeight) * (cropFontSize / 2)) /
    cropFontSize

  const marginBottom = `-${dynamicTopCrop + topAdjustment}em`

  const marginTop = `-${dynamicBottomCrop + bottomAdjustment}em`

  return css`
    line-height: ${lineHeight};
    &::before,
    &::after {
      content: '';
      display: block;
      height: 0;
      width: 0;
    }
    &::before {
      margin-bottom: ${marginBottom};
    }
    &::after {
      margin-top: ${marginTop};
    }
  `
}

const Typography = css`
  /* Aeonik Regular */
  @font-face {
    font-family: 'Aeonik';
    src: url(${AeonikRegularEot});
    src: url(${AeonikRegularWoff2}) format('woff2'),
      url(${AeonikRegularWoff}) format('woff'),
      url(${AeonikRegularOtf}) format('opentype'),
      url(${AeonikRegularEot}?#iefix) format('embedded-opentype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  /* Aeonik Medium */
  @font-face {
    font-family: 'Aeonik';
    src: url(${AeonikMediumEot});
    src: url(${AeonikMediumWoff2}) format('woff2'),
      url(${AeonikMediumWoff}) format('woff'),
      url(${AeonikMediumTtf}) format('truetype'),
      url(${AeonikMediumEot}?#iefix) format('embedded-opentype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  /* Aeonik Bold */
  @font-face {
    font-family: 'Aeonik';
    src: url(${AeonikBoldEot});
    src: url(${AeonikBoldWoff2}) format('woff2'),
      url(${AeonikBoldWoff}) format('woff'),
      url(${AeonikBoldOtf}) format('opentype'),
      url(${AeonikBoldEot}?#iefix) format('embedded-opentype');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  /* Suisse Works Book */
  @font-face {
    font-family: 'SuisseWorks';
    src: url(${SuisseWorksBookEot});
    src: url(${SuisseWorksBookWoff2}) format('woff2'),
      url(${SuisseWorksBookWoff}) format('woff'),
      url(${SuisseWorksBookTtf}) format('truetype'),
      url(${SuisseWorksBookEot}?#iefix) format('embedded-opentype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  /* Suisse Works Bold */
  @font-face {
    font-family: 'SuisseWorks';
    src: url(${SuisseWorksBoldEot});
    src: url(${SuisseWorksBoldWoff2}) format('woff2'),
      url(${SuisseWorksBoldWoff}) format('woff'),
      url(${SuisseWorksBoldTtf}) format('truetype'),
      url(${SuisseWorksBoldEot}?#iefix) format('embedded-opentype');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  *::before,
  *::after {
    box-sizing: border-box;
  }

  ::selection {
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
  }

  html {
    font-size: 16px;
    box-sizing: border-box;
    border: 0;
    margin: 0;
  }

  body {
    font-size: ${theme.root.font.baseSize};
    font-family: ${theme.fonts.body};
    font-weight: ${theme.fontWeights.regular};
    line-height: ${theme.root.font.bodyLineHeight};
    letter-spacing: ${theme.root.font.baseLetterSpacing};

    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-feature-settings: 'pnum';

    text-rendering: geometricPrecision;
    font-feature-settings: 'pnum';
    font-variant-numeric: proportional-nums;
    font-variant-ligatures: discretionary-ligatures;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${textCrop(1, 0.02, -0.05)}

    font-family: ${theme.fonts.heading};
    font-weight: 400;
    line-height: ${theme.root.font.headingLineHeight};
    margin: 0 0 0.25em;
    transition: ${theme.transition.all};
  }

  .text--xxxl {
    font-size: calc(${theme.root.font.xxxl} / 1.25);
    line-height: calc(${theme.root.font.headingLineHeight} / 1.25);

    @media ${theme.mq.medium} {
      font-size: calc(${theme.root.font.xxxl} / 1.25);
    }
  }

  h1,
  .text--xxl {
    font-size: calc(${theme.root.font.xl});
    font-weight: ${theme.fontWeights.regular};
    line-height: calc(${theme.root.font.headingLineHeight} / 1.25);

    @media ${theme.mq.small} {
      font-size: calc(${theme.root.font.xxl} / 1.15);
    }
    
    @media ${theme.mq.medium} {
      font-size: calc(${theme.root.font.xxl} / 1.15);
    }
  }

  h2,
  .text--xl {
    font-size: calc(${theme.fontSizes[4]} / 1.15);
    margin-bottom: ${theme.space[5]};

    @media ${theme.mq.medium} {
      font-size: ${theme.fontSizes[4]};
    }
  }

  h3,
  .text--lg {
    font-size: ${theme.fontSizes[3]};
    font-weight: 500;
    margin-bottom: ${theme.space[5]};

    @media ${theme.mq.medium} {
    }
  }

  h4,
  .text--md {
    font-size: ${theme.root.font.md};
    font-weight: 500;
    line-height: ${theme.root.font.bodyLineHeight};
    /* margin-bottom: ${theme.space[5]}; */
  }

  h5,
  .text--sm {
    font-size: calc(${theme.root.font.sm} * 1);
    font-weight: 500;
    letter-spacing: 1.5px;
    line-height: ${theme.root.font.bodyLineHeight};
    text-transform: uppercase;
    /* margin: 0; */
  }

  small {
    font-size: ${theme.root.font.sm};
  }

  .text--xs {
    font-size: ${theme.root.font.xs};
  }

  p {
    font-size: ${theme.fontSizes[2]};
    line-height: ${theme.root.font.bodyLineHeight};
    margin-bottom: 0.8em;

    &:last-child {
      margin-bottom: 0;
    }
  }

  strong {
    font-weight: 500;
  }

  .t--dual-col {
    column-count: 1;

    @media ${theme.mq.medium} {
      column-count: 2;
    }
  }

  .t--uppercase {
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  a {
    text-decoration: none;
    position: relative;
    z-index: 1;

    transition: ${theme.transition.all};

    color: ${theme.colors.secondary};

    &:hover,
    &:focus {
      text-decoration: none;
      color: ${darken(0.05, `${theme.colors.secondary}`)};
    }
  }

  .t--link {
    position: relative;

    &::before {
      content: '';
      background: ${theme.colors.secondary};
      width: 0;
      height: 6px;

      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 0;

      transition: width 0.222s ease-in-out;
    }

    /* &:hover {
      &::before {
        width: 100%;
      }
    } */

    &:active {
      &::after {
        mix-blend-mode: difference;
      }
    }
  }
`

export default Typography

// ___________________________________________________________________
