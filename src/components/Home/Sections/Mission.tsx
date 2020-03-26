// Mission:

// ___________________________________________________________________

// Core
import React, { useRef } from 'react'

// Components
import Section from '../../../components/Section'
import Wiggles from '../../../components/Wiggles'

// Elements
import { Box, Flex, Heading, Text } from '../../../elements'

// Styles
import * as S from '../styles.scss'

// Theme
import theme from '../../../../config/theme'

// ___________________________________________________________________

const Mission: React.FC = () => {
  return (
    <>
      <Section pt={0} border={true}>
        <Heading as="h5" color="secondary" mb={5}>
          Mission
        </Heading>
        <Heading as="h3">
          Our mission here ar MECO Sales &amp; Rentals is Awareness spiral
          east-west, rolfing peacock feather synchronicity. Dead sea minerals
          Spirit Rock.
        </Heading>
        <Text as="p">
          Burning man backjack five rhythms rawthentic self my brothers and
          sisters community, all-encompassing eye gazing. Somatic grass-fed
          herbal tea equinox.
        </Text>
      </Section>
    </>
  )
}

export default Mission
