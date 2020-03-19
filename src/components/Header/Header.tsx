// Header:
// Site Header with logo

// ___________________________________________________________________

import React, { useState } from 'react'
import { Link } from 'gatsby'

import Symbol from '../symbol'

import { Heading } from '../../elements'

import theme from '../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

const Header: React.FC = () => {
  return (
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
        <S.ReserveBtn>Reserve Water</S.ReserveBtn>
      </S.Toolbar>
    </S.Header>
  )
}

export default Header

// ___________________________________________________________________
