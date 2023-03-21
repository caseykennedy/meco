// Header:
// Site Header with logo

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'

import { currentYear } from '../../utils'

import useMarquee from '../../hooks/useMarquee'

import Drop from '../Drop'
import Icon from '../Icons'
import Marquee from '../Marquee'

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
  const marquee = useMarquee()
  return (
    <>
      <S.Header as="header" ref={mainRef}>
        <S.Symbol className={`symbol ${isShowing ? 'active' : ''}`}>
          <Drop />
        </S.Symbol>
        <S.Logo>
          <div className="wordmark">
            <Link to="/" aria-label="MECO, back to home">
              MECO
            </Link>
            <span>McKinnies Equipment Co.</span>
          </div>
        </S.Logo>
        <S.Toolbar>
          <S.Marquee>
            <Marquee>
              <div>
                {marquee.message
                  ? marquee.message
                  : `BURNING MAN WATER SERVICES ${currentYear}`}
              </div>
              <div />
            </Marquee>
          </S.Marquee>
          <S.ReserveBtn
            onClick={toggleOverlay}
            className={isShowing ? 'active' : ''}
            aria-label="make a reservation"
          >
            {!isShowing ? `reserve` : 'close'}
            {!isShowing && (
              <div className="icon">
                <Icon name="arrow" />
              </div>
            )}
          </S.ReserveBtn>
        </S.Toolbar>
      </S.Header>
    </>
  )
}

export default Header
