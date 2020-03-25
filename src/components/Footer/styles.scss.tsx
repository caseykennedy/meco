// Footer styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { Box, Flex, Heading } from '../../elements'
import theme from '../../../config/theme'

// ___________________________________________________________________

export const Footer = styled(Flex)`
  flex-direction: row;

  position: relative;
  margin-top: 2px;
`

export const Content = styled(Flex)`
  flex-direction: column;
  justify-content: flex-end;

  width: 100%;
  padding: ${theme.space[3]} ${theme.space[3]};

  background: ${theme.colors.background};
  border-left: ${theme.border};

  z-index: 99;

  @media ${theme.mq.small} {
    width: calc(
      calc(${theme.siteWidth} - ${theme.headerHeight}) - ${theme.sidebarWidth} +
        2px
    );
    min-width: inherit;
    padding: ${theme.space[3]} ${theme.space[4]};
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
  background: ${theme.colors.primary};


`

export const Marker = styled(Box)`
  color: ${theme.colors.background};
  font-weight: 500;
  letter-spacing: 1.5px;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  text-transform: uppercase;
`

export const Illustration = styled(Box)`
  svg {
    width: 100%;
  }
`
