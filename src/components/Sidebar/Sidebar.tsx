// Sidebar:
//

// ___________________________________________________________________

import React, { useState } from 'react'
import { useSpring, config } from 'react-spring'

import Icon from '../Icons'
import Gallery from '../Gallery'
import ImgMatch from '../ImgMatch'

import { Box, Text } from '../../elements'

import theme from '../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

type SidebarProps = {
  isShowing: boolean
  toggleOverlay: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ isShowing, toggleOverlay }) => {
  return (
    <>
      <S.Sidebar as="aside">
        <S.SidebarInner>
          <Box width={1} className="gallery">
            <Gallery />
          </Box>
          <S.ReserveBtn
            onClick={toggleOverlay}
            className={isShowing ? 'active' : ''}
            aria-label="make a reservation"
          >
            Reserve Water <span>→</span>
          </S.ReserveBtn>
        </S.SidebarInner>
      </S.Sidebar>
    </>
  )
}

export default Sidebar

// ___________________________________________________________________
