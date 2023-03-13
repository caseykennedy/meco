// Sidebar:
// ___________________________________________________________________

import React from 'react'
import Gallery from '../Gallery'
import * as S from './styles.scss'

// ___________________________________________________________________

type SidebarProps = {
  isShowing: boolean
  toggleOverlay: () => void
}

const Sidebar = ({ isShowing, toggleOverlay }: SidebarProps) => (
  <S.Sidebar as="aside">
    <S.SidebarInner>
      <div className="gallery">
        {/* <Gallery /> */}
      </div>
      <S.ReserveBtn
        onClick={toggleOverlay}
        className={isShowing ? 'active' : ''}
        aria-label="make a reservation"
      >
        Reserve Water <span>→</span>
      </S.ReserveBtn>
    </S.SidebarInner>
  </S.Sidebar>
)

export default Sidebar
