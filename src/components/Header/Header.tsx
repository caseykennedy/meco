// Header:
// Site Header with logo and navigation

// ___________________________________________________________________

import React, { useState } from 'react'
import { Link } from 'gatsby'

import { useSpring, config } from 'react-spring'
import { Scrambler } from 'react-text-scrambler'

import Symbol from '../symbol'

import { Heading } from '../../elements'

import theme from '../../../config/theme'

import * as S from './styles.scss'

// ___________________________________________________________________

const Header: React.FC = () => {
  const DelayedFade = useSpring({
    config: config.molasses,
    delay: 600,
    from: { opacity: 0, transform: theme.transform.matrix.from },
    to: { opacity: 1, transform: theme.transform.matrix.to }
  })
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
