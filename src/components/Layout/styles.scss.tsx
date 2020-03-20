// Layout Styles:

// ___________________________________________________________________

// Libraries
import styled from 'styled-components'
import { animated } from 'react-spring'
import { lighten } from 'polished'

// Theme
import theme from '../../../config/theme'

// Elements
import { Box, Flex } from '../../elements'

// Begin Styles
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
  margin-bottom: 0rem;
  /* min-width: 0; slick-slider overflow fix */

  position: relative;
  z-index: 22;

  width: calc(${theme.siteWidth});

  @media ${theme.mq.medium} {
  }
`

// ___________________________________________________________________
