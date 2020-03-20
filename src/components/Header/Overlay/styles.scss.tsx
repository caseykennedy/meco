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
    justify-content: center;
    flex-direction: column;
    align-items: center;

    position: fixed;

    width: ${overlayWidth};
    height: 100%;
    padding: ${theme.space[3]};

    top: ${theme.headerHeight};
    right: -${overlayWidth};
    bottom: 0;

    background: ${theme.colors.background};
    visibility: hidden;
    opacity: 1;
    transition: all 0.444s ease-out;

    @media ${theme.mq.small} {
      width: calc(${overlayWidth} / 2);
      right: -calc(${overlayWidth} / 2);
      border-left: ${theme.border};
    }

    &.nav-bg--open {
      visibility: visible;
      opacity: 1;
      right: 0;
    }
  }
`
