// Layout Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { animated } from 'react-spring'

import { Box, Flex } from '../../elements'
import theme from '../../../config/theme'

// ___________________________________________________________________

export const Wrapper = styled(Flex)`
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;

  @media ${theme.mq.medium} {
    flex-direction: row;
  }
`

export const Main = styled(animated.main)`
  max-height: 100%;
  margin-bottom: ${theme.headerHeight};
  /* min-width: 0; slick-slider overflow fix */

  position: relative;
  width: calc(${theme.siteWidth} * 2);

  @media ${theme.mq.medium} {
    width: ${theme.siteWidth};
  }
`

// ___________________________________________________________________
