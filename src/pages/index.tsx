// Home page

// ___________________________________________________________________

// Libraries
import React from 'react'
import { useSpring, config } from 'react-spring'

// Hooks
import useOverlay from '../hooks/useOverlay'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Home from '../components/Home'

// Theme
import theme from '../../config/theme'

// ___________________________________________________________________

const IndexPage = () => {
  // Overlay toggle
  const { isShowing, toggleOverlay } = useOverlay()
  // Page animation
  const pageAnimation = useSpring({
    config: config.slow,
    delay: 0,
    from: { transform: theme.transform.matrix.from },
    to: { transform: theme.transform.matrix.to }
  })
  return (
    <Layout isShowing={isShowing} toggleOverlay={toggleOverlay}>
      <SEO />
      <Home isShowing={isShowing} toggleOverlay={toggleOverlay} />
    </Layout>
  )
}

export default IndexPage

// ___________________________________________________________________
