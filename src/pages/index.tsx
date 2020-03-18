// Home page

// ___________________________________________________________________

// Libraries
import React from 'react'
import { Link } from 'gatsby'
import { useSpring, config } from 'react-spring'

// Hooks
import useContentYaml from '../hooks/useContentYaml'
import useHover from '../hooks/useHover'

// Elements
import { AnimatedBox, Box, Flex, Heading, Text } from '../elements'

// Components
import Layout from '../components/Layout'
import Section from '../components/Section'
import SEO from '../components/SEO'
import DribbbleGrid from '../components/DribbbleGrid'
import ImgMatch from '../components/ImgMatch'
import Divider from '../elements/Divider'
import Icon from '../components/Icons'
import Accordion from '../components/Accordion'

// Sections
import Home from '../sections/Home'

// Theme
import theme from '../../config/theme'

// ___________________________________________________________________

const IndexPage = () => {
  const data = useContentYaml()

  // Page animation
  const pageAnimation = useSpring({
    config: config.molasses,
    delay: 0,
    from: { opacity: 0 },
    to: { opacity: 1 }
  })
  return (
    <Layout>
      <SEO />
      <AnimatedBox style={pageAnimation}>
        <Home />
      </AnimatedBox>
    </Layout>
  )
}

export default IndexPage

// ___________________________________________________________________
