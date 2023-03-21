// Sidebar:
// ___________________________________________________________________

import React from 'react'
import Gallery from '../Gallery'
import Icon from '../Icons'
import * as S from './styles.scss'

// ___________________________________________________________________

type SidebarProps = {
  isShowing: boolean
  toggleOverlay: () => void
}

const Sidebar = ({ isShowing, toggleOverlay }: SidebarProps) => (
  <S.Sidebar>
    <S.SidebarInner>
      <div className="gallery">
        <Gallery />
      </div>
      <S.ReserveBtn
        onClick={toggleOverlay}
        className={isShowing ? 'active' : ''}
        aria-label="make a reservation"
      >
        <div>Reserve Water</div>
        <div className="icon">
          <Icon name="arrow" />
        </div>
      </S.ReserveBtn>
    </S.SidebarInner>
  </S.Sidebar>
)

export default Sidebar
