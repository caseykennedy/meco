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
  padding-top: ${theme.space[3]};
  padding-right: ${theme.space[4]};
  padding-left: ${theme.space[4]};

  border-left: ${theme.border};

  @media ${theme.mq.small} {
  }
`

export const Indent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: calc(${theme.indentWidth} + calc(${theme.space[3]} * 2));
  height: auto;
  padding: ${theme.space[3]};

  @media ${theme.mq.small} {
  }
`

export const Marker = styled(Box)`
  position: sticky;
  top: 80px;
`

// ___________________________________________________________________ Styles
