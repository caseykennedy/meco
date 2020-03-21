// Home:

// ___________________________________________________________________

// Core
import React, { useRef } from 'react'

// Components
import Section from '../../components/Section'
import Sidebar from '../../components/Sidebar'
import Wiggles from '../../components/Wiggles'
import Accordion from '../../components/Accordion'
import Footer from '../../components/Footer'

// Elements
import { Box, Flex, Heading, Text } from '../../elements'
import HeadingStroked from '../../elements/HeadingStroked'

// Styles
import * as S from './styles.scss'

// Theme
import theme from '../../../config/theme'

// ___________________________________________________________________

const AccordionProps = {
  chevronColor: theme.colors.text,
  color: theme.colors.text,
  colorActive: theme.colors.secondary,
  borderColor: theme.colors.text
}

type Props = {
  isShowing: boolean
  toggleOverlay: () => void
}

const Home: React.FC<Props> = ({ isShowing, toggleOverlay }) => {
  // Ref <main> to lock body for modal/overlay
  const mainRef = useRef<HTMLDivElement>(null)
  return (
    <>
      <S.Container>
        <Sidebar />
        <S.Content>
          <Section pt={0} border={false}>
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
          </Section>
          <Section border={true}>
            <Heading as="h4">
              Our mission here ar MECO Sales &amp; Rentals is Awareness spiral
              east-west, rolfing peacock feather synchronicity. Dead sea
              minerals Spirit Rock.
            </Heading>
            <Text as="p">
              Burning man backjack five rhythms rawthentic self my brothers and
              sisters community, all-encompassing eye gazing. Somatic grass-fed
              herbal tea equinox.
            </Text>
          </Section>
          <Section border={true}>
            <S.Illustration pb={8} px={4}>
              <Wiggles />
            </S.Illustration>
            <Heading as="h4" mb={0}>
              Our services include, but are not limited to:
            </Heading>
          </Section>

          <S.Services as="ul">
            {services.map((service, idx) => (
              <li key={idx}>
                <span>○</span> {service}
              </li>
            ))}
          </S.Services>

          <Section border={true}>
            <S.Illustration pb={8} px={4}>
              <Wiggles />
            </S.Illustration>
            <Heading as="h4">
              Supplying the Playa’s Water Needs for nearly 20 Years!
            </Heading>
            <Text as="p">
              Burning man backjack five rhythms rawthentic self my brothers and
              sisters community, all-encompassing eye gazing. Somatic grass-fed
              herbal tea equinox.
            </Text>
          </Section>
          <Box>
            {faqs.map((item, index) => (
              <Accordion title={item.title} key={index} {...AccordionProps}>
                <Box pt={3} px={4}>
                  <Text as="p">{item.body}</Text>
                </Box>
              </Accordion>
            ))}
          </Box>
          <Box>
            <S.ReserveBtn
              onClick={toggleOverlay}
              className={isShowing ? 'active' : ''}
              aria-label="make a reservation"
            >
              {!isShowing ? `Reserve Water` : 'close'} <span>→</span>
            </S.ReserveBtn>
          </Box>
        </S.Content>
        <S.Indent>
          <S.Marker>family owned &amp; operated since 1996</S.Marker>
        </S.Indent>
      </S.Container>
      <Footer />
    </>
  )
}

export default Home

// ___________________________________________________________________

const services = [
  'non-potable water hauling',
  'dust abatement',
  'septic systems',
  'excavation',
  'potable water hauling',
  'driveways',
  'trucking',
  'equipment rentals'
]

const faqs = [
  {
    title: 'Potable water tank rental',
    body:
      "We offer customizable alcoholic beverage and food catering packages so The Venue becomes YOUR venue. Need a DJ? We've got you covered. Photographer/Videographer packages available as well."
  },
  {
    title: 'Tank delivery schedule',
    body:
      "The perfect After Party--No Curfew--go 24 hours if you'd like. Make it the pre-party--Walking distance from the local bars and clubs--upstairs from Xhale, Lucky Beaver, and Aleworx. Next door to Peak and Opal. Let us help you throw the party of your dreams!"
  },
  {
    title: 'Private bulk potable water storage',
    body:
      'Host your destination wedding and get a free estimate based on your select options. Invite the extended family for the reception! Would it be too weird if it was the same place you threw your bachelorette/bachelor party!? Low group pricing. Free parking.'
  },
  {
    title: 'RV potable water',
    body:
      'Need the perfect holiday party location? Have a corporate function that needs an all inclusive venue? Company brunch before a day on the slopes? Family Re-union? Come see what we have to offer at The Venue. '
  }
]
