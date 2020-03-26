// Sidebar Styles:

// ___________________________________________________________________

// Core
import styled from 'styled-components'
import { darken } from 'polished'

// Theme
import theme from '../../../config/theme'

// Elements
import { Box, Flex, AnimatedBox, AnimatedFlex } from '../../elements'

// Styles
import { Rotate } from '../../styles/transitions'

// Begin Styles
// ___________________________________________________________________

export const Sidebar = styled(AnimatedBox)`
  width: calc(${theme.siteWidth} * 2);
  padding-left: 0;
  margin-bottom: -2px;
  z-index: 0;

  transition: all 0.333s ease-in-out;

  @media ${theme.mq.small} {
    /* display: initial; */
    position: fixed;
    padding-left: 2px;

    width: ${theme.sidebarWidth};
    top: ${theme.headerHeight};
    right: 0;
  }
`

export const SidebarInner = styled(AnimatedFlex)`
  flex-direction: column;
  justify-content: flex-end;

  width: 100%;
  height: inherit;
  overflow: auto;

  @media ${theme.mq.small} {
    height: calc(100vh - ${theme.headerHeight});
  }
`

export const ReserveBtn = styled(Flex)`
  align-items: center;
  justify-content: center;
  flex-grow: 1;

  color: ${theme.colors.white};
  text-transform: uppercase;
  font-size: ${theme.fontSizes[3]};
  font-weight: ${theme.fontWeights.medium};
  text-align: center;
  line-height: 1;
  letter-spacing: 1.5px;

  /* background: ${theme.colors.secondary}; */
  padding: ${theme.space[4]} ${theme.space[4]};
  margin-top: 2px;

  display: none;

  cursor: pointer;
  transition: all 0.333s ease-in-out;

  @media ${theme.mq.small} {
    display: flex;
    padding: ${theme.space[7]} ${theme.space[4]};
  }

  span {
    font-size: ${theme.fontSizes[2]};
    position: relative;
    top: -4px;
    margin-left: ${theme.space[3]};

    transition: ${theme.transition.all};
  }

  &:hover {
    background: ${darken(0.05, `${theme.colors.primary}`)};

    span {
      margin-left: ${theme.space[5]};
    }
  }

  /* &.active {
    background: ${theme.colors.primary};
  } */
`
