// Sidebar:
//

// ___________________________________________________________________

import React, { useState } from 'react'

import { useSpring, config } from 'react-spring'
import { Scrambler } from 'react-text-scrambler'

import useScrollWatch from '../../hooks/useScrollWatch'

import Overlay from './Overlay'
import Icon from '../Icons'

import { Heading, Text } from '../../elements'

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

  const DelayedFade = useSpring({
    config: config.molasses,
    delay: 600,
    from: { opacity: 0, transform: theme.transform.matrix.from },
    to: { opacity: 1, transform: theme.transform.matrix.to }
  })

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
      <S.Sidebar as="aside" style={DelayedFade}>
        <S.SidebarInner>slider</S.SidebarInner>
      </S.Sidebar>
    </>
  )
}

export default Sidebar

// ___________________________________________________________________
