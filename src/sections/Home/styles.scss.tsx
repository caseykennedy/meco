// Homepage Styles:

// ___________________________________________________________________

import styled from 'styled-components'

// Elements
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

  min-width: calc(${theme.headerHeight} - 2px);
  height: auto;
  padding: ${theme.space[3]} 0;
  background: ${theme.colors.background};

  display: none;

  @media ${theme.mq.small} {
    display: flex;
  }
`

export const Marker = styled(Box)`
  position: sticky;
  top: 80px;
`

// ___________________________________________________________________ Styles
