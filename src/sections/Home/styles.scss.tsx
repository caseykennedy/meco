// Homepage Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

import { Box, Flex, Heading } from '../../elements'

import theme from '../../../config/theme'

// ___________________________________________________________________

export const Container = styled(Flex)`
  flex-direction: column;
  justify-content: flex-end;

  position: relative;
  margin-top: calc(${theme.headerHeight});

  @media ${theme.mq.small} {
    flex-direction: row-reverse;
  }
`

export const Content = styled(Flex)`
  flex-direction: column;
  justify-content: flex-end;

  width: 100%;
  padding-top: ${theme.space[3]};

  background: ${theme.colors.background};
  border-left: ${theme.border};

  z-index: 99;

  @media ${theme.mq.small} {
    width: calc(
      calc(${theme.siteWidth} - ${theme.headerHeight}) - ${theme.sidebarWidth} +
        2px
    );
    min-width: inherit;
  }
`

export const Indent = styled(Flex)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: calc(${theme.headerHeight} - 2px);
  max-width: calc(${theme.headerHeight} - 2px);
  height: auto;
  padding: ${theme.space[4]} 0;
  background: ${theme.colors.background};

  display: none;

  @media ${theme.mq.small} {
    display: flex;
  }
`

export const Marker = styled(Box)`
  font-weight: 500;
  letter-spacing: 2px;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  text-transform: uppercase;
`

export const Illustration = styled(Box)`
  svg {
    width: 100%;
  }
`

export const Services = styled(Flex)`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: space-between;

  /* border-bottom: ${theme.border}; */

  li {
    flex: 1 1 auto;
    align-self: auto;
    width: 100%;
    box-sizing: border-box;
    padding: ${theme.space[3]} ${theme.space[4]};
    border-bottom: ${theme.border};
    list-style: none;
    text-transform: uppercase;

    font-size: ${theme.fontSizes[2]};
    font-weight: ${theme.fontWeights.medium};

    span {
      margin-right: ${theme.space[2]};
    }
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
  letter-spacing: 2px;

  background: ${theme.colors.secondary};
  height: calc(${theme.headerHeight} - 2px);
  padding: ${theme.space[7]} ${theme.space[4]};

  cursor: pointer;
  transition: all 0.333s ease-in-out;

  @media ${theme.mq.small} {
    padding: 6rem ${theme.space[4]};
  }

  span {
    font-size: ${theme.fontSizes[2]};
    position: relative;
    top: -4px;
    margin-left: ${theme.space[3]};

    transition: ${theme.transition.all};
  }

  &:hover {
    background: ${darken(0.05, `${theme.colors.secondary}`)};

    span {
      margin-left: ${theme.space[5]};
    }
  }

  &.active {
    background: ${theme.colors.primary};
  }
`
