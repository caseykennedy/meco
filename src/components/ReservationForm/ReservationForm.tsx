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
        <Heading as="h5" color="secondary" mb={5}>
          Reservations are now closed
        </Heading>
        <Heading as="h2" fontSize={[4]} pr={[0, 6]} mb={0}>
          Don't get left in
          <br />
          the dust.
        </Heading>
        {/* <Heading as="h5" color="secondary" mb={5}>
          Update
        </Heading>
        <Heading as="h3">2022 MECO Water Price Update</Heading>
        <Text as="p">
          <strong>RESERVATION CUTOFF DATE IS AUGUST 1st!!</strong>
        </Text>
        <Text as="p">
          Since 2009, MECO has not raised our water rates. We have tried to keep
          our water prices as low as possible for as long as possible.
        </Text>
        <Text as="p">
          Nevada currently has the 2nd highest gas prices in the United States.
          All Water brought to Playa is trucked in by MECO from the City Gerlach
          daily.
        </Text>
        <Text as="p">
          Due to inflation and rising gas prices we are being forced to make the
          decision to raise our prices as well.{' '}
        </Text>
        <Text as="p">
          If you have already prepaid for water refills we will honor the
          previous price that been paid.
        </Text>
        <Text as="p">
          Going forward, all water costs will be the new and updated water
          pricing for Burning Man 2022.
        </Text>
        <Text as="p" fontWeight={500}>
          Water per gallon:
        </Text>
        <Box as="ul" mb={4}>
          <li className="text--sm">
            <span>○</span> Tank Rentals: $1.50
          </li>
          <li className="text--sm">
            <span>○</span> Private Containers: $1.75
          </li>
          <li className="text--sm">
            <span>○</span> RV’s: $2.50
          </li>
        </Box>
        <Text as="p">
          We value and care about all of our customers and Burning Man Camps, we
          hope you understand and thank you for your Business!
        </Text> */}
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
                placeholder="# of 500 gal. tanks needed  (sold out)"
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
                placeholder="# of 1000 gal. tanks needed (sold out)"
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
                placeholder="# of RVs (sold out)"
              />
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
        <button type="submit" value="Submit Request" disabled={true}>
          Reservations Closed
        </button>
      </S.Form>
    </S.ReservationForm>
  )
}

export default ReservationForm
