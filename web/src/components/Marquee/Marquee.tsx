// Marquee:
// ___________________________________________________________________

import * as React from 'react'
import FastMarquee from 'react-fast-marquee'
import * as S from './styles.scss'

// ___________________________________________________________________

type Props = {
  children: React.ReactNode
  direction?: 'left' | 'right'
  speed?: number
}

const Marquee = ({ children, direction = "left", speed = 75 }: Props) => {
  const MarqueeProps = {
    direction,
    gradient: false,
    pauseOnHover: true,
    speed,
  }
  return (
    <S.Marquee>
      <FastMarquee {...MarqueeProps}>
        {children}
        <div />
      </FastMarquee>
    </S.Marquee>
  )
}

export default Marquee
