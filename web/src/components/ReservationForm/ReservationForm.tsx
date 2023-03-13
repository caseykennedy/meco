// Reservation form:
// ___________________________________________________________________

import React from 'react'

import { currentYear } from '../../utils'

import useReserveForm from '../../hooks/useReserveForm'

import Section from '../Section'
import BlockContent from '../BlockContent'

import { Box, Heading, Text } from '../../elements'
import * as S from './styles.scss'

// ___________________________________________________________________

const ReservationForm = () => {
  const data = useReserveForm()
  const { _rawMessage, active, resOpen, resClosed } = data
  return (
    <S.ReservationForm>
      <Section pt={4} border={false}>
        <Heading as="h5" color="secondary" mb={4}>
          Burning Man {currentYear}
        </Heading>

        <Heading
          as="h2"
          fontSize={[4]}
          pr={[0, 6]}
          mb={0}
          style={{ maxWidth: '11ch' }}
        >
          Don't get left in the dust.
        </Heading>

        {active && _rawMessage && (
          <Box mt={5}>
            {_rawMessage && <BlockContent blocks={_rawMessage || []} />}
          </Box>
        )}
      </Section>

      <Section bg="primary" pt={4} border={true}>
        <Text as="p" color="background">
          {/* <strong>Reservations {CurrentYear}</strong> */}
          <strong>Reservations open {resOpen}</strong>
        </Text>
        <Text as="p" color="background" fontSize={1}>
          In the meantime, shoot us your email and we'll let you know as soon as
          you can reserve your spot.
        </Text>
      </Section>

      {!active ? (
        <S.Form
          name="Email Capture Form"
          data-netlify="true"
          data-netlify-honeypot="bot-input"
        >
          <input type="hidden" name="bot-input" />
          <input type="hidden" name="form-name" value="Email Capture Form" />
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
                <label htmlFor="email">
                  Email:
                  <abbr title="required" aria-label="required">
                    *
                  </abbr>
                </label>
                <input
                  name="email"
                  placeholder="Email"
                  type="email"
                  required={true}
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
          </fieldset>
          <button type="submit" value="Submit Email">
            Submit
          </button>
        </S.Form>
      ) : (
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
          </fieldset>
          <button type="submit" value="Submit Request" disabled={true}>
            Reservations Closed
          </button>
        </S.Form>
      )}
    </S.ReservationForm>
  )
}

export default ReservationForm
