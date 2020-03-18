// Header Styles:

// ___________________________________________________________________

// Core
import styled from 'styled-components'
import { readableColor, lighten } from 'polished'

// Theme
import theme from '../../../config/theme'

// Elements
import { Box, Flex, AnimatedFlex } from '../../elements'

// ___________________________________________________________________

export const Header = styled(AnimatedFlex)`
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: flex-start;

  background: ${theme.colors.background};
  border-bottom: ${theme.border};

  position: fixed;
  left: 0;
  width: ${theme.siteWidth};
  height: ${theme.headerHeight};
  padding: 0;

  transition: all 0.333s ease-in-out;
  z-index: 30;
`

export const HeaderInner = styled(Flex)`
  flex-wrap: wrap;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;

  color: white;
  position: relative;
  /* z-index: 31; */
`

export const Symbol = styled(Flex)`
  justify-content: center;
  align-items: center;

  background: ${theme.colors.primary};
  border-right: ${theme.border};
  padding: 0 ${theme.space[3]};
  height: ${theme.headerHeight};

  svg {
    width: 18px;
    fill: ${theme.colors.background};
  }
`

export const Logo = styled(Box)`
  position: relative;
  margin-left: ${theme.space[3]};

  font-family: 'SuisseWorks';
  font-size: 2.3rem;
  line-height: 0;

  a {
    display: flex;
    color: ${theme.colors.text};
  }
`

// ___________________________________________________________________
