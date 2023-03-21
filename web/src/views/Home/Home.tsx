// Home:

// ___________________________________________________________________

import React, { useRef } from 'react'

import Section from '../../components/Section'
import Footer from '../../components/Footer'
import Icon from '../../components/Icons'
import Drips from '../../components/Drips'
import Meco from '../../components/Meco'
import FadeIn from '../../components/FadeIn'

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
          <Section pt={4} pb={0} border={false}>
            <Heading as="h1" color="secondary">
              Portable
              <br />
              water
              <br />
              services
            </Heading>
            <Heading mb={0} className="text--md">
              + equipment rentals
            </Heading>
            <S.HeroArt>
              <div className="meco">
                <Meco />
              </div>
              <div className="drips">
                <FadeIn threshold={0.35}>
                  <Drips />
                </FadeIn>
              </div>
            </S.HeroArt>
          </Section>
          {/* <S.VerticalText>MECO</S.VerticalText> */}
          <Mission />
          <Services />
          <BurningMan />
          <S.ReserveBtn
            onClick={toggleOverlay}
            className={isShowing ? 'active' : ''}
            aria-label="make a reservation"
          >
            {!isShowing ? (
              <>
                <div>Reserve Water</div>
                <div className="icon">
                  <Icon name="arrow" />
                </div>
              </>
            ) : (
              'close'
            )}
          </S.ReserveBtn>
        </S.Content>
        <S.Indent>
          <S.Marker>family owned &amp; operated since 1996</S.Marker>
        </S.Indent>
      </S.HomePage>
      <Footer />
    </>
  )
}

export default Home
