// Layout:
// TODO: create hook for siteMetaData

// ___________________________________________________________________

import React, { useRef } from 'react'
import { ThemeProvider } from 'styled-components'

import Header from '../Header'
import Sidebar from '../Sidebar'
import Overlay from '../Header/Overlay'
import ReservationForm from '../ReservationForm'

import { Box } from '../../elements'
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
        <S.Main ref={mainRef}>{children}</S.Main>
        <Overlay
          id="drawer-root"
          root="root"
          isOpen={isShowing}
          handleExit={toggleOverlay}
          mainRef={mainRef}
          className={`${isShowing ? 'nav-bg--open' : 'nav-bg--closed'}`}
        >
          <ReservationForm />
        </Overlay>
        <div style={{ display: 'none' }}>
          <form
            name="Reservations New"
            method="post"
            action="/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input
              type="hidden"
              name="form-name"
              value="Reservations"
            />
            <div style={{ display: 'none' }}>
              <label>
                Don’t fill this out:{' '}
                <input name="bot-field" />
              </label>
            </div>
            <fieldset>
              <Box width={1} className="form-group">
                <Box width={[1, 1, 1 / 2]} className="form-group__box">
                  <label htmlFor="name">
                    Name:{' '}
                    <abbr title="required" aria-label="required">
                      *
                    </abbr>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your name"
                    required={true}
                  />
                </Box>
                <Box width={[1, 1, 1 / 2]} className="form-group__box">
                  <label htmlFor="campName">
                    Name:{' '}
                    <abbr title="required" aria-label="required">
                      *
                    </abbr>
                  </label>
                  <input
                    type="text"
                    name="campName"
                    id="campName"
                    placeholder="Camp name"
                    required={true}
                  />
                </Box>
              </Box>
              <Box width={1} className="form-group">
                <Box width={[1, 1, 1 / 2]} className="form-group__box">
                  <label htmlFor="email">
                    Email:
                    <abbr title="required" aria-label="required">
                      *
                    </abbr>
                  </label>
                  <input
                    name="email"
                    placeholder="Your email"
                    type="email"
                    required={true}
                  />
                </Box>
                <Box width={[1, 1, 1 / 2]} className="form-group__box">
                  <label htmlFor="phone">Phone:</label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="___ ___-____"
                  />
                </Box>
              </Box>
              <Box width={1} className="form-group">
                <Box width={[1, 1, 1 / 2]} className="form-group__box">
                  <label htmlFor="fiveHunGal"># of 500 gal tanks needed:</label>
                  <input
                    type="number"
                    name="fiveHunGal"
                    id="fiveHunGal"
                    placeholder="# of 500 gal. tanks needed"
                  />
                </Box>
                <Box width={[1, 1, 1 / 2]} className="form-group__box">
                  <label htmlFor="thousandGal"># of 1000 gal. tanks:</label>
                  <input
                    type="number"
                    min="1"
                    max="20"
                    name="thousandGal"
                    id="thousandGal"
                    placeholder="# of 1000 gal. tanks needed"
                  />
                </Box>
              </Box>
              <Box width={1} className="form-group">
                <Box width={[1, 1, 1 / 2]} className="form-group__box">
                  <label htmlFor="privateContainers">
                    # of private containers:
                  </label>
                  <input
                    type="number"
                    name="privateContainers"
                    id="privateContainers"
                    placeholder="# of private containers"
                  />
                </Box>
                <Box width={[1, 1, 1 / 2]} className="form-group__box">
                  <label htmlFor="rv"># of RVs:</label>

                  <input
                    type="number"
                    name="rv"
                    id="rv"
                    placeholder="# of RVs"
                  />
                </Box>
              </Box>
              <Box width={1} className="form-group">
                <label htmlFor="comments">Comments:</label>
                <textarea
                  name="details"
                  id="details"
                  rows={4}
                  placeholder="Comments"
                />
              </Box>
            </fieldset>
            <button type="submit" value="Submit Request">
              Submit
            </button>
          </form>
        </div>
      </S.Wrapper>
    </ThemeProvider>
  )
}

export default Layout
