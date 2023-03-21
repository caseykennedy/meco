// Home page
// ___________________________________________________________________

// Libraries
import React from 'react'

// Hooks
import useOverlay from '../hooks/useOverlay'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Home from '../views/Home'

// ___________________________________________________________________

const IndexPage = () => {
  // Overlay toggle
  const { isShowing, toggleOverlay } = useOverlay()
  return (
    <Layout isShowing={isShowing} toggleOverlay={toggleOverlay}>
      <SEO individual={true} />
      <Home isShowing={isShowing} toggleOverlay={toggleOverlay} />
    </Layout>
  )
}

export default IndexPage

// ___________________________________________________________________
