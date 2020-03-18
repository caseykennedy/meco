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
      <S.HeaderInner>
        <S.Symbol>
          <Symbol />
        </S.Symbol>
        <S.Logo>
          <Link to="/" aria-label="MECO, back to home">
            MECO
          </Link>
        </S.Logo>
      </S.HeaderInner>
    </S.Header>
  )
}

export default Header

// ___________________________________________________________________
