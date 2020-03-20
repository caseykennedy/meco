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

const Sidebar: React.FC = () => {
  return (
    <>
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
