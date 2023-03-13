/* eslint-disable react/no-danger */
// Accordion:

import React, { useCallback, useEffect, useState, useRef } from 'react'

import Icon from '../Icons'
import * as S from './styles.scss'

// ___________________________________________________________________

type Props = {
  active?: boolean
  children: React.ReactNode
  title: string
}

// ___________________________________________________________________

const Accordion = ({ active, children, title = 'title' }: Props) => {
  const refToggle = useRef<HTMLDivElement>(null)
  const refContent = useRef<HTMLDivElement>(null)

  let isActiveState

  if (!active) {
    isActiveState = false
  } else {
    isActiveState = true
  }

  const [isActive, setIsActive] = useState(isActiveState)

  const toggleAccordion = useCallback(() => {
    setIsActive(!isActive)
  }, [isActive])

  const caratVariants = {
    open: {
      rotate: '45deg',
      transition: {
        rotate: {
          stiffness: 400,
          velocity: -400,
          duration: 0.5,
          ease: 'easeInOut'
        }
      }
    },
    closed: {
      rotate: '0deg',
      transition: {
        rotate: {
          stiffness: 400,
          velocity: -400,
          duration: 0.5,
          ease: 'easeInOut'
        }
      }
    }
  }

  const containerVariants = {
    active: {
      maxHeight: `${refContent.current && refContent.current.scrollHeight}px`,
      transition: {
        maxHeight: {
          duration: 1,
          ease: 'easeOut'
        }
      }
    },
    disabled: {
      maxHeight: '0px',
      height: '0px',
      transition: {
        maxHeight: {
          duration: 1,
          ease: 'easeOut'
        }
      }
    }
  }

  useEffect(() => {
    const currentToggler = refToggle.current
    currentToggler?.addEventListener('click', toggleAccordion)
    return () => currentToggler?.removeEventListener('click', toggleAccordion)
  }, [toggleAccordion])

  return (
    <S.AccordionContainer
      initial="active"
      animate={[isActive ? 'active' : 'disabled']}
      exit="disabled"
    >
      <S.AccordionInner>
        <S.AccordionToggle
          initial="closed"
          animate={isActive ? 'open' : 'closed'}
          ref={refToggle}
        >
          <h5 dangerouslySetInnerHTML={{ __html: title }} className="title" />

          <S.Carat variants={caratVariants}>
            <Icon name="chevron" />
          </S.Carat>
        </S.AccordionToggle>

        <S.AccordionContent
          ref={refContent}
          variants={containerVariants}
          // style={{ maxHeight: `${setHeight}` }}
        >
          {children}
        </S.AccordionContent>
      </S.AccordionInner>
    </S.AccordionContainer>
  )
}

export default Accordion
