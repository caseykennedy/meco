// Navigation Styles:

// ___________________________________________________________________

import styled from 'styled-components'

import { Box, Flex } from '../../../elements'

import theme from '../../../../config/theme'

// Begin Styles
// ___________________________________________________________________

const overlayWidth = '100%'

export const Overlay = styled(Flex)`
  justify-content: flex-end;
  flex-direction: column;

  position: fixed;
  overflow: auto;
  z-index: 9;

  width: ${overlayWidth};
  height: calc(100%);
  padding-top: ${theme.headerHeight};
  /* padding: 0; */

  right: 0;
  bottom: 0;

  background: ${theme.colors.background};
  visibility: hidden;
  opacity: 0;
  transition: all 0.333s ease-out;

  @media ${theme.mq.medium} {
    border-left: ${theme.border};
    border-width: 2px;
    right: calc(-${overlayWidth} / 2);
    width: calc(calc(${overlayWidth} - ${theme.headerHeight}) / 2);

    visibility: visible;
    opacity: 1;
  }

  &.nav-bg--open {
    right: 0;
    visibility: visible;
    opacity: 1;
  }
`
