// Header Styles:

// ___________________________________________________________________

// Core
import styled from 'styled-components'
import { readableColor, darken } from 'polished'

// Theme
import theme from '../../../config/theme'

// Elements
import { Box, Flex, AnimatedFlex } from '../../elements'

// ___________________________________________________________________

export const Header = styled(AnimatedFlex)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background: ${theme.colors.background};
  border-bottom: ${theme.border};

  position: fixed;
  left: 0;
  width: 100vw;
  height: ${theme.headerHeight};
  padding: 0;

  transition: all 0.333s ease-in-out;
  z-index: 30;
`

export const Symbol = styled(Flex)`
  justify-content: center;
  align-items: center;

  background: ${theme.colors.primary};
  border-right: ${theme.border};
  min-width: ${theme.headerHeight};
  height: calc(${theme.headerHeight} - 2px);

  transition: all 0.333s ease-in-out;

  svg {
    width: 18px;
    fill: ${theme.colors.background};
  }
  
  &.active {
    background: ${theme.colors.secondary};
  }
`

export const Logo = styled(AnimatedFlex)`
  align-items: center;

  width: 50vw;

  font-family: 'SuisseWorks';
  font-size: 1.6rem;
  font-weight: ${theme.fontWeights.bold};
  line-height: 0;

  @media ${theme.mq.medium} {
    font-size: 2.3rem;
  }

  a {
    display: flex;
    position: relative;
    top: 1px;
    margin-left: ${theme.space[3]};
    color: ${theme.colors.text};
  }

  span {
    color: ${theme.colors.primary};
    font-size: 1.2rem;
    font-weight: ${theme.fontWeights.regular};
    letter-spacing: 0;
    margin-left: ${theme.space[3]};

    display: none;

    @media (min-width: 881px) {
      display: inherit;
    }
  }
`

export const Toolbar = styled(Flex)`
  align-items: center;
  width: 50vw;
  border-left: ${theme.border};
`

export const Marquee = styled(Flex)`
  align-items: center;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
  line-height: 1;
  letter-spacing: 1.5px;

  border-right: ${theme.border};
  height: ${theme.headerHeight};
  padding: 0 ${theme.space[5]};

  display: none;

  @media ${theme.mq.medium} {
    display: inherit;
  }
`

export const ReserveBtn = styled(Flex)`
  align-items: center;
  justify-content: center;
  flex-grow: 1;

  color: ${theme.colors.white};
  text-transform: uppercase;
  font-weight: ${theme.fontWeights.medium};
  text-align: center;
  line-height: 1;
  letter-spacing: 1.5px;

  background: ${theme.colors.secondary};
  height: calc(${theme.headerHeight} - 2px);
  padding: 0 ${theme.space[4]};

  cursor: pointer;
  transition: all 0.333s ease-in-out;

  span {
    font-size: ${theme.fontSizes[2]};
    position: relative;
    top: -2px;
    margin-left: ${theme.space[2]};

    transition: ${theme.transition.all};
  }

  &:hover {
    background: ${darken(0.05, `${theme.colors.secondary}`)};

    span {
      margin-left: ${theme.space[4]};
    }
  }

  &.active {
    background: ${theme.colors.primary};
  }
`

// ___________________________________________________________________
