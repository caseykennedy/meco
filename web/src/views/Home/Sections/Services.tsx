// Services:

// ___________________________________________________________________

// Core
import React, { useRef } from 'react'

// Components
import FadeIn from '../../../components/FadeIn'
import Section from '../../../components/Section'
import Wiggles from '../../../components/Wiggles'

// Elements
import { Box, Flex, Heading, Text } from '../../../elements'

// Styles
import * as S from '../styles.scss'

// ___________________________________________________________________

const services = [
  'potable water hauling',
  'non-potable water hauling',
  'dust abatement',
  'septic systems',
  'excavation',
  'driveways',
  'trucking',
  'equipment rentals',
  '+ more'
]

const Services = () => (
  <>
    <Section border={true}>
      <S.Illustration pt={[5, 0]} pb={[7, 7]} px={4}>
        <FadeIn>
          <Wiggles />
        </FadeIn>
      </S.Illustration>
      <Heading className="text--sm" color="secondary" mt={4} mb={5}>
        Services
      </Heading>
      <Heading as="h3" mb={0} style={{ maxWidth: '17ch' }}>
        Our services include, but are not limited to:
      </Heading>
    </Section>
    <S.Services as="ul">
      {services.map((service, idx) => (
        <li className="text--sm" key={idx}>
          <span>○</span> {service}
        </li>
      ))}
    </S.Services>
  </>
)

export default Services
