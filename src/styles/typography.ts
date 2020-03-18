// Typography

// ___________________________________________________________________

import { css } from 'styled-components'
import theme from '../../config/theme'

// BC Falster Grotesk Regular
import FalsterGroteskEot from './fonts/BCFalsterGrotesk-Regular.eot'
import FalsterGroteskWoff2 from './fonts/BCFalsterGrotesk-Regular.woff2'
import FalsterGroteskWoff from './fonts/BCFalsterGrotesk-Regular.woff'
import FalsterGroteskOtf from './fonts/BCFalsterGrotesk-Regular.otf'

// Aeonik Regular
import AeonikRegularEot from './fonts/AeonikRegular.eot'
import AeonikRegularWoff2 from './fonts/AeonikRegular.woff2'
import AeonikRegularWoff from './fonts/AeonikRegular.woff'
import AeonikRegularOtf from './fonts/AeonikRegular.otf'

// Suisse Works
import SuisseWorksEot from './fonts/SuisseWorks-Bold-WebTrial.eot'
import SuisseWorksWoff2 from './fonts/SuisseWorks-Bold-WebTrial.woff2'
import SuisseWorksWoff from './fonts/SuisseWorks-Bold-WebTrial.woff'
import SuisseWorksTtf from './fonts/SuisseWorks-Bold-WebTrial.ttf'

// ___________________________________________________________________

const Typography = css`
  /* BC Falster */
  @font-face {
    font-family: 'Falster';
    src: url(${FalsterGroteskEot});
    src: url(${FalsterGroteskWoff2}) format('woff2'),
      url(${FalsterGroteskWoff}) format('woff'),
      url(${FalsterGroteskOtf}) format('opentype'),
      url(${FalsterGroteskEot}?#iefix) format('embedded-opentype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

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

  /* Suisse Works Bold */
  @font-face {
    font-family: 'SuisseWorks';
    src: url(${SuisseWorksEot});
    src: url(${SuisseWorksWoff2}) format('woff2'),
      url(${SuisseWorksWoff}) format('woff'),
      url(${SuisseWorksTtf}) format('truetype'),
      url(${SuisseWorksEot}?#iefix) format('embedded-opentype');
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
    font-family: ${theme.fonts.heading};
    font-weight: ${theme.fontWeights.regular};
    line-height: ${theme.root.font.headingLineHeight};
    margin: 0 0 0.2em;
    transition: ${theme.transition.all};
  }

  .text--xxxl {
    font-size: calc(${theme.root.font.xxxl} / 1.25);
    line-height: calc(${theme.root.font.headingLineHeight} / 1);

    @media ${theme.mq.medium} {
      font-size: calc(${theme.root.font.xxxl} * 1.25);
    }
  }

  h1,
  .text--xxl {
    font-size: calc(${theme.root.font.xl});
    line-height: calc(${theme.root.font.headingLineHeight} / 1);

    @media ${theme.mq.medium} {
      font-size: ${theme.root.font.xxl};
    }
  }

  h2,
  .text--xl {
    font-size: ${theme.root.font.lg};

    @media ${theme.mq.medium} {
      font-size: ${theme.root.font.xl};
    }
  }

  h3,
  .text--lg {
    font-size: ${theme.root.font.md};
    /* line-height: ${theme.root.font.bodyLineHeight}; */

    @media ${theme.mq.medium} {
      font-size: ${theme.root.font.lg};
    }
  }

  h4,
  .text--md {
    font-size: ${theme.root.font.md};
    line-height: ${theme.root.font.bodyLineHeight};
    text-indent: 0;
    text-align: left;
    text-transform: uppercase;
  }

  .text--sm,
  small {
    font-size: ${theme.root.font.sm};
  }

  .text--xs {
    font-size: ${theme.root.font.xs};
  }

  p {
    font-size: ${theme.fontSizes[3]};
    line-height: ${theme.root.font.bodyLineHeight};
    margin-bottom: 0.8em;

    &:last-child {
      margin-bottom: 0;
    }
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

    &:hover,
    &:focus {
      text-decoration: none;
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

  ul {
    li {
      font-size: ${theme.fontSizes[2]};
      padding-bottom: ${theme.space[2]};
      position: relative;
      /* margin-top: ${theme.space[5]}; */
      /* border-bottom: 1px solid ${theme.colors.white}; */

      /* &::before {
        content: '▶';
        position: absolute;
        width: 20px;
        left: 0;
        
      } */

      span {
        color: ${theme.colors.white};
        font-size: ${theme.fontSizes[2]};
      }

      /* .ico {
        padding-right: ${theme.space[3]};

        svg {
          width: calc(${theme.space[3]} * 1.4);
        }
      } */
    }
  }
`

export default Typography

// ___________________________________________________________________
