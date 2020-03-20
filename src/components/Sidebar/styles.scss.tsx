// Sidebar Styles:

// ___________________________________________________________________

// Core
import styled from 'styled-components'
import { readableColor, lighten } from 'polished'

// Theme
import theme from '../../../config/theme'

// Elements
import { Box, Flex, AnimatedFlex } from '../../elements'

// Styles
import { Rotate } from '../../styles/transitions'

// Begin Styles
// ___________________________________________________________________

export const Sidebar = styled(AnimatedFlex)`
  flex-direction: column;
  justify-content: center;

  /* right: 0; */
  width: ${theme.siteWidth};
  padding: 0 0 2px 2px;

  transition: all 0.333s ease-in-out;
  
  @media ${theme.mq.small} {
    flex-direction: row;
    position: sticky;
    top: ${theme.headerHeight};
    display: initial;
    width: ${theme.sidebarWidth};
  }
`

export const MakeReservation = styled(Box)`
  text-align: center;
  width: 100%;
  background: gray;
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes[4]};
  cursor: pointer;

  display: none;

  @media ${theme.mq.medium} {
    display: inherit;
  }
`

// export const Toggle = styled.div`
//   font-size: calc(${theme.fontSizes[3]});
//   font-weight: 400;

//   &.nav-bg--open {
//     color: ${theme.colors.background};
//   }

//   /* &::after {
//     content: '';
//     position: relative;
//     background: transparent;
//   } */

//   /* @media ${theme.mq.medium} {
//     transform-origin: 5px 5px;
//     width: ${theme.space[6]};
//   } */
// `

// ___________________________________________________________________
