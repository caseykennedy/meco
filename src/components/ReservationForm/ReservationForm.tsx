// Reservation form:

// ___________________________________________________________________

// Core
import React, { useState } from 'react'
import { useSpring, config } from 'react-spring'

// Styles
import * as S from './styles.scss'

import Section from '../Section'

// Elements
import { Box, Flex, AnimatedBox, Heading } from '../../elements'
import Button from '../../elements/Button'

// Config
import theme from '../../../config/theme'

// ___________________________________________________________________

type Props = {}

const ReservationForm: React.SFC<Props> = () => {
  // Page animation
  const pageAnimation = useSpring({
    config: config.slow,
    delay: 200,
    from: { opacity: 0, transform: theme.transform.matrix.from },
    to: { opacity: 1, transform: theme.transform.matrix.to }
  })
  return (
    <AnimatedBox width={1} style={pageAnimation}>
      <Section pt={4} border={true}>
        <Heading as="h3" mb={0}>
          Don't get left
          <br />
          in the dust.
        </Heading>
      </Section>
      <S.Form
        name="meco-reservation-form"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
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
                type="text"
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
            <label htmlFor="comments">Message </label>
            <textarea
              name="details"
              id="details"
              rows={4}
              placeholder="Message"
            />
          </Box>

          <button type="submit" value="Submit Request">
            <Flex width={1} py={8}>
              Submit
            </Flex>
          </button>
        </fieldset>
      </S.Form>
    </AnimatedBox>
  )
}

export default ReservationForm
