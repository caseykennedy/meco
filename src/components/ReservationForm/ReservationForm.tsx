// Reservation form:

// ___________________________________________________________________

import React from 'react'
import Section from '../Section'
import { Box, Heading, Text } from '../../elements'
import * as S from './styles.scss'
import theme from '../../../config/theme'

// ___________________________________________________________________

// Encode form
// TODO: use correct types
// const encode = (data: any) => {
//   return Object.keys(data)
//     .map(key => `${encodeURIComponent(key)} = ${encodeURIComponent(data[key])}`)
//     .join('&')
// }

const CurrentYear = new Date().getFullYear()

const ReservationForm = () => {
  return (
    <S.ReservationForm>
      <Section pt={4} border={true}>
        <Heading as="h2" fontSize={[4]} pr={[0, 6]} mb={0}>
          Don't get left in
          <br />
          the dust.
        </Heading>
      </Section>
      <Section bg="primary" pt={4} border={true}>
        <Text as="p" color="background">
          <strong>Reservations {CurrentYear}</strong>
        </Text>
      </Section>
      <S.Form
        name="Static Form"
        data-netlify="true"
        data-netlify-honeypot="bot-input"
      >
        <input type="hidden" name="bot-input" />
        <input type="hidden" name="form-name" value="Static Form" />
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
                Camp Name:{' '}
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
              <input type="number" name="rv" id="rv" placeholder="# of RVs" />
            </Box>
          </Box>
          {/* <Box width={1} className="form-group">
            <label htmlFor="comments">Dates of service:</label>
            <input
              type="input"
              name="serviceDates"
              id="serviceDates"
              placeholder="Dates of Service"
            />
          </Box> */}
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
    </S.ReservationForm>
  )
}

export default ReservationForm
