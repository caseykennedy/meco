// Layout:
// TODO: create hook for siteMetaData

// ___________________________________________________________________

import React, { useEffect, useRef } from 'react'

import { ThemeProvider } from 'styled-components'

import useNavigation from '../../hooks/useNavigation'

import Header from '../Header'
import Sidebar from '../Sidebar'
import Footer from '../Footer'

import theme from '../../../config/theme'

import GlobalStyles from '../../styles/global'
import * as S from './styles.scss'

// ___________________________________________________________________

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Ref <main> to lock body for modal/overlay
  const mainRef = useRef<HTMLDivElement>(null)

  // eslint-disable-next-line no-console
  console.log(`%c (+)(—) core37 `, `background: #000000; color: #ffffff`)
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <S.Wrapper>
        <Header />
        <S.Main
          ref={mainRef}
        >
          {children}
          {/* <Footer /> */}
        </S.Main>
        
      </S.Wrapper>
    </ThemeProvider>
  )
}

export default Layout
