// Cursor:

// ___________________________________________________________________

// Core
import React from 'react'

// Components
import Section from '../../components/Section'

// Elements
import { Box, Heading, Text } from '../../elements'
import Divider from '../../elements/Divider'
import HeadingStroked from '../../elements/HeadingStroked'

// Styles
import * as S from './styles.scss'

// Theme
import theme from '../../../config/theme'

// ___________________________________________________________________

type Props = {}

const Home: React.FC = () => {
  return (
    <S.Container>
      <S.Indent>{/* <S.Marker>a</S.Marker> */}</S.Indent>
      <S.Content>
        <Box>
          <Heading as="h1" color="secondary">
            Portable
            <br />
            water
            <br />
            services
          </Heading>
          <Heading as="h4">+ equipment rentals</Heading>

          <Box
            py={7}
            style={{
              writingMode: 'vertical-rl',
              textOrientation: 'mixed'
            }}
          >
            <HeadingStroked
              fontWeight={theme.fontWeights.bold}
              strokeWidth="3px"
              strokeColor={theme.colors.secondary}
              className="text--xxxl"
            >
              MECO
            </HeadingStroked>
          </Box>

          <Heading as="h4">
            Our mission here ar MECO Sales &amp; Rentals is Awareness spiral
            east-west, rolfing peacock feather synchronicity. Dead sea minerals
            Spirit Rock.
          </Heading>
          <Text as="p">
            Burning man backjack five rhythms rawthentic self my brothers and
            sisters community, all-encompassing eye gazing. Somatic grass-fed
            herbal tea equinox.
          </Text>
        </Box>
        <Divider py={10} />
        <Divider py={10} />
        <Divider py={10} />
      </S.Content>
    </S.Container>
  )
}

export default Home

// ___________________________________________________________________
