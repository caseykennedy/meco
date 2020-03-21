// Reservation form:

// ___________________________________________________________________

// Core
import React, { useState } from 'react'
import { useSpring, config } from 'react-spring'

// Styles
import * as S from './styles.scss'

import Section from '../Section'

// Elements
import { Box, AnimatedBox, Heading } from '../../elements'
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
        name="the-venue-contact-form"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        // onSubmit={onSubmit}
      >
        <input type="hidden" name="bot-field" />
        <input
          type="hidden"
          name="the-venue-contact-form"
          value="the-venue-contact-form"
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
                placeholder="Name"
                required={true}
              />
            </Box>
            <Box width={[1, 1, 1 / 2]} className="form-group__box">
              <label htmlFor="date">
                Date:{' '}
                <abbr title="required" aria-label="required">
                  *
                </abbr>
              </label>
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

              {/* <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="(___) ___-____"
              pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
              ref={register({
                maxLength: 12,
                pattern: {
                  value: /[0-9]{3} [0-9]{3} [0-9]{4}/i,
                  message: 'Invalid phone number'
                }
              })}
            /> */}

              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="___ ___-____"
              />
            </Box>
          </Box>

          <Button type="submit" value="Submit Request">
            Submit Request
          </Button>
        </fieldset>
      </S.Form>
    </AnimatedBox>
  )
}

export default ReservationForm
