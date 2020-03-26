// Home:

// ___________________________________________________________________

import React, { useRef } from 'react'

import Section from '../../components/Section'
import Footer from '../../components/Footer'
import Drips from '../../components/Drips'

import { Heading } from '../../elements'
import HeadingStroked from '../../elements/HeadingStroked'

import BurningMan from './Sections/BurningMan'
import Mission from './Sections/Mission'
import Services from './Sections/Services'

import * as S from './styles.scss'

import theme from '../../../config/theme'

// ___________________________________________________________________

type Props = {
  isShowing: boolean
  toggleOverlay: () => void
}

const Home: React.FC<Props> = ({ isShowing, toggleOverlay }) => {
  // Ref <main> to lock body for modal/overlay
  const mainRef = useRef<HTMLDivElement>(null)
  return (
    <>
      <S.HomePage>
        <S.Content>
          <Section pt={0} border={false}>
            <Heading as="h1" color="secondary">
              Portable
              <br />
              water
              <br />
              services
            </Heading>
            <Heading as="h4">+ equipment rentals</Heading>
            <S.Drips>
              <Drips />
            </S.Drips>
            <S.VerticalText>
              <HeadingStroked
                fontWeight={theme.fontWeights.bold}
                strokeWidth="3px"
                strokeColor={theme.colors.secondary}
                className="text--xxxl"
              >
                MECO
              </HeadingStroked>
            </S.VerticalText>
          </Section>
          <Mission />
          <Services />
          <BurningMan />
          <S.ReserveBtn
            onClick={toggleOverlay}
            className={isShowing ? 'active' : ''}
            aria-label="make a reservation"
          >
            {!isShowing ? `Reserve Water` : 'close'} <span>→</span>
          </S.ReserveBtn>
        </S.Content>
        <S.Indent>
          <S.Marker>family owned &amp; operated since 1996</S.Marker>
        </S.Indent>
      </S.HomePage>
      <Footer />

      <form
        name="test"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="test" />
        <input type="text" name="name" />
      </form>
    </>
  )
}

export default Home
