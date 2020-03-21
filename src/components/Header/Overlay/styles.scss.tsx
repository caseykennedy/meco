// Navigation Styles:

// ___________________________________________________________________

import styled from 'styled-components'

import { Box } from '../../../elements'

import theme from '../../../../config/theme'

// Begin Styles
// ___________________________________________________________________

const overlayWidth = '100vw'

export const Overlay = styled(Box)`
  &.nav-bg {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;

    position: fixed;

    width: ${overlayWidth};
    height: 100%;
    padding: ${theme.space[3]} 0;

    top: calc(${theme.headerHeight} + 2rem);
    right: 0;
    bottom: 0;

    background: ${theme.colors.background};
    visibility: hidden;
    opacity: 0;
    transition: all 0.222s ease-out;

    @media ${theme.mq.small} {
      width: calc(${overlayWidth} / 2);
      right: -calc(${overlayWidth} / 2);
      border-left: ${theme.border};
    }

    &.nav-bg--open {
      top: ${theme.headerHeight};
      visibility: visible;
      opacity: 1;
    }
  }
`
