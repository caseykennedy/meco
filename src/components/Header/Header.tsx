// Header:
// Site Header with logo

// ___________________________________________________________________

import React, { useState } from 'react'
import { Link } from 'gatsby'

import useOverlay from '../../hooks/useOverlay'

import Overlay from './Overlay'
import Symbol from '../symbol'

import { Heading } from '../../elements'

import theme from '../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

type HeaderShape = {
  mainRef: React.RefObject<HTMLDivElement>
  isShowing: boolean
  toggleOverlay: () => void
}

const Header: React.FC<HeaderShape> = ({
  mainRef,
  isShowing,
  toggleOverlay
}) => {
  return (
    <>
      <S.Header as="header">
        <S.Logo>
          <S.Symbol className={isShowing ? 'active' : ''}>
            <Symbol />
          </S.Symbol>
          <Link to="/" aria-label="MECO, back to home">
            MECO
          </Link>
          <span>McKinnies Equipment Co.</span>
        </S.Logo>
        <S.Toolbar>
          <S.Marquee>Burning Man 2020 is upon us</S.Marquee>
          <S.ReserveBtn
            onClick={toggleOverlay}
            className={isShowing ? 'active' : ''}
            aria-label="make a reservation"
          >
            {!isShowing ? `reserve` : 'close'} <span>→</span>
          </S.ReserveBtn>
        </S.Toolbar>
      </S.Header>
    </>
  )
}

export default Header

// ___________________________________________________________________
