// Home page

// ___________________________________________________________________

// Libraries
import React from 'react'
import { Link } from 'gatsby'
import { useSpring, config } from 'react-spring'

// Hooks
import useContentYaml from '../hooks/useContentYaml'
import useHover from '../hooks/useHover'

// Components
import Layout from '../components/Layout'
import Section from '../components/Section'
import SEO from '../components/SEO'
import DribbbleGrid from '../components/DribbbleGrid'
import ImgMatch from '../components/ImgMatch'
import Divider from '../elements/Divider'
import Icon from '../components/Icons'
import Accordion from '../components/Accordion'

// Elements
import { AnimatedBox, Box, Flex, Heading, Text } from '../elements'

// Theme
import theme from '../../config/theme'

// ___________________________________________________________________

const IndexPageComp: React.FC = () => {
  const DelayedFade = useSpring({
    config: config.molasses,
    delay: 300,
    from: { opacity: 0, transform: theme.transform.matrix.from },
    to: { opacity: 1, transform: theme.transform.matrix.to }
  })
  return (
    <>
      <Section pt={0} pb={0}>
        <Flex
          flexDirection="column"
          justifyContent="flex-end"
          width={[1]}
          style={{ minHeight: '100vh' }}
          pt={3}
          pb={3}
        >
          <Box>
            <Heading as="h3">
              I run a boutique design and development practice helping brands
              define and develop visual identity systems and cutting-edge
              digital experiences.
            </Heading>
          </Box>
        </Flex>
      </Section>
    </>
  )
}

const IndexPage = () => {
  const data = useContentYaml()

  // Page animation
  const pageAnimation = useSpring({
    config: config.molasses,
    delay: 0,
    from: { opacity: 0, transform: theme.transform.matrix.from },
    to: { opacity: 1, transform: theme.transform.matrix.to }
  })
  return (
    <Layout>
      <SEO />
      <AnimatedBox style={pageAnimation}>
        <IndexPageComp />
      </AnimatedBox>
    </Layout>
  )
}

export default IndexPage

// ___________________________________________________________________
