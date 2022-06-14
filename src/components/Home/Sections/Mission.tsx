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
          Update
        </Heading>
        <Heading as="h3">2022 MECO Water Price Update</Heading>
        <Text as="p">
          Since 2009, MECO has not raised our water rates. We have tried to keep
          our water prices as low as possible for as long as possible.
        </Text>
        <Text as="p">
          Nevada currently has the 2nd highest gas prices in the United States.
          All Water brought to Playa is trucked in by MECO from the City Gerlach
          daily.
        </Text>
        <Text as="p">
          Due to inflation and rising gas prices we are being forced to make the
          decision to raise our prices as well.{' '}
        </Text>
        <Text as="p">
          If you have already prepaid for water refills we will honor the
          previous price that been paid.
        </Text>
        <Text as="p">
          Going forward, all water costs will be the new and updated water
          pricing for Burning Man 2022.
        </Text>
        <Heading as="h3" mb={0}>Water per gallon:</Heading>
      </Section>

      <S.Services as="ul">
        <li className="text--sm">
          <span>○</span> Tank Rentals: $1.50
        </li>
        <li className="text--sm">
          <span>○</span> Private Containers: $1.75
        </li>
        <li className="text--sm">
          <span>○</span> RV’s: $2.50
        </li>
      </S.Services>

      <Section pt={4} border={true}>
        <Text as="p">
          We value and care about all of our customers and Burning Man Camps, we
          hope you understand and thank you for your Business!
        </Text>
      </Section>

      <Section pt={0} border={true}>
        <Heading as="h5" color="secondary" mt={4} mb={5}>
          Mission
        </Heading>
        <Heading as="h3">
          Our mission here at MECO Sales &amp; Rentals is to keep you filthy
          burners hydrated.
        </Heading>
        <Text as="p">
          The desert is a dry place where the number one priority is to stay
          hydrated. We're here to help! MECO is family owned and operated and
          has been happily serving the playa's water needs for over 20 years.
        </Text>
      </Section>
    </>
  )
}

export default Mission
