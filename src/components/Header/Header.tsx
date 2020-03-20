// Header:
// Site Header with logo

// ___________________________________________________________________

import React, { useState } from 'react'
import { Link } from 'gatsby'

import Overlay from './Overlay'
import Symbol from '../symbol'

import { Heading } from '../../elements'

import theme from '../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

type HeaderShape = {
  mainRef: React.RefObject<HTMLDivElement>
}

const Header: React.FC<HeaderShape> = ({ mainRef }) => {
  // Navigation toggle
  const [isNavOpen, setNavOpen] = useState(false)
  const toggleModal = () => setNavOpen(!isNavOpen)
  return (
    <>
      <S.Header as="header">
        <S.Logo>
          <S.Symbol>
            <Symbol />
          </S.Symbol>
          <Link to="/" aria-label="MECO, back to home">
            MECO
          </Link>
          <span>McKinnies Equipment Co.</span>
        </S.Logo>
        <S.Toolbar>
          <S.Marquee>Burning Man 2020 is upon us</S.Marquee>
          <S.ReserveBtn onClick={toggleModal} aria-label="toggle menu">
          {!isNavOpen ? `Reserve Water` : 'close'} <span>→</span>
          </S.ReserveBtn>
        </S.Toolbar>
      </S.Header>
      <Overlay
        id="drawer-root"
        root="root"
        isOpen={isNavOpen}
        handleExit={() => setNavOpen(false)}
        mainRef={mainRef}
        className={`nav-bg ${isNavOpen ? 'nav-bg--open' : 'nav-bg--closed'}`}
      >
        <Heading as="h3" color="white">reservation form</Heading>
      </Overlay>
    </>
  )
}

export default Header

// ___________________________________________________________________
