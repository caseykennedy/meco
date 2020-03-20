// Sidebar:
//

// ___________________________________________________________________

import React, { useState } from 'react'

import { useSpring, config } from 'react-spring'

import Overlay from './Overlay'
import Icon from '../Icons'
import Gallery from '../Gallery'

import { Box, Text } from '../../elements'

import theme from '../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

type SidebarShape = {
  mainRef: React.RefObject<HTMLDivElement>
}

// ___________________________________________________________________

const Sidebar: React.FC<SidebarShape> = ({ mainRef }) => {
  // Navigation toggle
  const [isNavOpen, setNavOpen] = useState(false)
  const toggleModal = () => setNavOpen(!isNavOpen)
  return (
    <>
      <Overlay
        id="drawer-root"
        root="root"
        isOpen={isNavOpen}
        handleExit={() => setNavOpen(false)}
        mainRef={mainRef}
        className={`nav-bg ${isNavOpen ? 'nav-bg--open' : 'nav-bg--closed'}`}
      >
        asdf
      </Overlay>
      <S.Sidebar as="aside">
        <Box className="gallery">
          <Gallery />
        </Box>
        {/* <S.MakeReservation>make a reservation</S.MakeReservation> */}
      </S.Sidebar>
    </>
  )
}

export default Sidebar

// ___________________________________________________________________
