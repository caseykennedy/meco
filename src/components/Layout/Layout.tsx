// Layout:
// TODO: create hook for siteMetaData

// ___________________________________________________________________

import React, { useRef } from 'react'
import { ThemeProvider } from 'styled-components'

import Header from '../Header'
import Sidebar from '../Sidebar'
import Overlay from '../Header/Overlay'
import ReservationForm from '../ReservationForm'

import theme from '../../../config/theme'
import GlobalStyles from '../../styles/global'
import * as S from './styles.scss'

// ___________________________________________________________________

type LayoutProps = {
  children: React.ReactNode
  isShowing: boolean
  toggleOverlay: () => void
}

const Layout: React.FC<LayoutProps> = ({
  children,
  isShowing,
  toggleOverlay
}) => {
  // Ref <main> to lock body for modal/overlay
  const mainRef = useRef<HTMLDivElement>(null)
  // eslint-disable-next-line no-console
  console.log(
    `%c MECO | McKinnies Equipment Co. `,
    `background: #B8860B; color: #132B59`
  )
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <S.Wrapper>
        <Header
          isShowing={isShowing}
          toggleOverlay={toggleOverlay}
          mainRef={mainRef}
        />
        <Sidebar isShowing={isShowing} toggleOverlay={toggleOverlay} />
        <S.Main ref={mainRef}>
          {children}
        </S.Main>
        <Overlay
          id="drawer-root"
          root="root"
          isOpen={isShowing}
          handleExit={toggleOverlay}
          mainRef={mainRef}
          className={`${isShowing ? 'nav-bg--open' : 'nav-bg--closed'}`}
        >
          <ReservationForm isShowing={isShowing} />
        </Overlay>
      </S.Wrapper>
    </ThemeProvider>
  )
}

export default Layout
