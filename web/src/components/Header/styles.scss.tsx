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

export const Header = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 2px;

  background: ${theme.colors.primary};
  border-bottom: ${theme.border};

  padding: 0;
  position: fixed;
  left: 0;

  height: ${theme.headerHeight};
  width: 100%;

  transition: all 0.333s ease-in-out;
  z-index: 99;

  & > * {
    flex: 1;
  }
`

export const Logo = styled.div`
  display: flex;

  font-family: ${theme.fonts.serif};
  font-size: 1.85rem;
  font-weight: ${theme.fontWeights.bold};

  background: ${theme.colors.background};

  @media ${theme.mq.medium} {
    font-size: 2.3rem;
  }

  .wordmark {
    border-left: ${theme.border};
  }

  & > * {
    display: flex;
    align-items: center;
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
    font-size: 1rem;
    font-weight: ${theme.fontWeights.regular};
    letter-spacing: 0;
    margin-left: ${theme.space[3]};

    display: none;

    @media ${theme.mq.small} {
      display: initial;
    }

    @media ${theme.mq.medium} {
      font-size: 1.2rem;
    }
  }

  .symbol {
    display: flex;
    justify-content: center;
    align-items: center;

    background: ${theme.colors.primary};

    width: ${theme.headerHeight};
    height: calc(${theme.headerHeight} - 2px);

    transition: all 0.333s ease-in-out;

    svg {
      width: 18px;
      fill: ${theme.colors.background};
    }

    &.active {
      background: ${theme.colors.secondary};
    }
  }
`

export const Toolbar = styled.div`
  display: flex;
  gap: 2px;

  & > * {
    flex: 1;
  }
`

export const Marquee = styled.div`
  flex: 2;
  align-items: center;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
  /* line-height: 1; */
  letter-spacing: 1.5px;

  background: ${theme.colors.background};
  padding: 0;

  display: none;

  @media ${theme.mq.medium} {
    display: flex;
  }
`

export const ReserveBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${theme.colors.white};
  text-transform: uppercase;
  font-weight: ${theme.fontWeights.medium};
  text-align: center;
  line-height: 1;
  letter-spacing: 1.5px;

  background: ${theme.colors.secondary};
  padding: 0;

  cursor: pointer;
  transition: all 0.333s ease-in-out;

  span {
    font-size: ${theme.fontSizes[2]};
    position: relative;
    top: -2px;
    left: 0;
    margin-left: ${theme.space[2]};

    transition: ${theme.transition.all};
  }

  &:hover {
    background: ${darken(0.05, `${theme.colors.secondary}`)};

    span {
      left: ${theme.space[2]};
    }
  }

  &.active {
    background: ${theme.colors.primary};
  }
`

// ___________________________________________________________________
