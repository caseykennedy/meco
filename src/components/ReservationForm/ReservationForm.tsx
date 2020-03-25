// Reservation form:

// ___________________________________________________________________

// Core
import React, { useState } from 'react'
import { useTransition } from 'react-spring'

// Styles
import * as S from './styles.scss'

import Section from '../Section'

// Elements
import { Box, Flex, AnimatedBox, Heading, Text } from '../../elements'
import Button from '../../elements/Button'

// Config
import theme from '../../../config/theme'

// ___________________________________________________________________

type TransitionProps = {
  transition: any
}

type Props = {
  isShowing: boolean
}

const Form = ({ transition }: TransitionProps) => {
  return (
    <S.Container style={transition}>
      <Section pt={4} border={true}>
        <Heading fontSize={4} mb={0}>
          Don't get left
          <br />
          in the dust.
        </Heading>
      </Section>
      <Section pt={4} border={true}>
        <Text as="p">
          Our mission here ar MECO Sales &amp; Rentals is Awareness spiral
          east-west, rolfing peacock feather synchronicity. Dead sea minerals
          Spirit Rock.
        </Text>
      </Section>
      <S.Form
        name="meco-reservation-form"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <input
          type="hidden"
          name="meco-reservation-form"
          value="meco-reservation-form"
        />
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
              <label htmlFor="500Gal">500 gallon tanks needed:</label>

              <input
                type="text"
                name="500Gal"
                id="500Gal"
                placeholder="500 gallon tanks needed"
              />
            </Box>
            <Box width={[1, 1, 1 / 2]} className="form-group__box">
              <label htmlFor="500Gal">1000 gallon tanks needed:</label>

              <input
                type="number"
                min="1"
                max="20"
                name="1000Gal"
                id="1000Gal"
                placeholder="1000 gallon tanks needed"
              />
            </Box>
          </Box>

          <Box width={1} className="form-group">
            <Box width={[1, 1, 1 / 2]} className="form-group__box">
              <label htmlFor="privateContainers">privateContainers</label>

              <input
                type="text"
                name="privateContainers"
                id="privateContainers"
                placeholder="privateContainers"
              />
            </Box>
            <Box width={[1, 1, 1 / 2]} className="form-group__box">
              <label htmlFor="rv">Number of RVs:</label>

              <input
                type="text"
                name="rv"
                id="rv"
                placeholder="Number of RVs"
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
      </S.Form>
    </S.Container>
  )
}

const ReservationForm: React.FC<Props> = ({ isShowing }) => {
  const transitions = useTransition(isShowing, null, {
    from: {
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    leave: {
      opacity: 0
    },
    trail: 250,
    unique: true,
    reset: true
  })
  return transitions.map(
    ({ item, key, props }) => item && <Form key={key} transition={props} />
  )
}

export default ReservationForm
