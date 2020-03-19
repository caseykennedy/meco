// Homepage Styles:

// ___________________________________________________________________

import styled from 'styled-components'

// Elements
import { Box, Flex, Heading } from '../../elements'

import theme from '../../../config/theme'

// ___________________________________________________________________

export const Container = styled(Flex)`
  margin-top: calc(${theme.headerHeight});
`

export const Content = styled(Flex)`
  flex-direction: column;
  justify-content: flex-end;

  width: 100%;
  min-width: 100vw;
  padding: ${theme.space[3]} ${theme.space[4]};

  background: ${theme.colors.background};
  border-left: ${theme.border};

  @media ${theme.mq.medium} {
    min-width: inherit;
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

  @media ${theme.mq.medium} {
    display: inherit;
  }
`

export const Marker = styled(Box)`
  position: sticky;
  top: 80px;
`

// ___________________________________________________________________ Styles
