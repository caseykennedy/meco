// Reservation form:
// ___________________________________________________________________

import React from 'react'
import { NetlifyForm, Honeypot } from 'react-netlify-forms'

import { currentYear } from '../../utils'

import useReserveForm from '../../hooks/useReserveForm'

import Section from '../Section'
import BlockContent from '../BlockContent'

import { Box, Heading, Text } from '../../elements'
import * as S from './styles.scss'

// ___________________________________________________________________

const FormFeedback = (props: {
  message: string
  type: 'error' | 'success'
}) => (
  <Box
    bg={props.type === 'error' ? '#ECA8A8' : 'secondary'}
    color={props.type === 'error' ? '#A32323' : 'background'}
    py={7}
    px={4}
  >
    <Text as="p" fontSize={3} textAlign="center">
      {props.message}
    </Text>
  </Box>
)

const ReservationForm = () => {
  const data = useReserveForm()
  const { _rawMessage, active } = data
  return (
    <S.ReservationForm>
      <Section pt={4} border={false}>
        <Heading as="h5" color="secondary" mb={4}>
          Burning Man {currentYear}
        </Heading>

        <Heading as="h2" mb={0} style={{ maxWidth: '10ch' }}>
          Don't get left in the dust.
        </Heading>

        {_rawMessage && (
          <Box mt={5}>
            <BlockContent blocks={_rawMessage || []} />
          </Box>
        )}
      </Section>

      <Section bg="primary" pt={4} border={true}>
        <Text as="p" color="background">
          <strong>
            {active ? 'Reservations are open!' : 'Reservations are closed.'}
          </strong>
        </Text>
        {!active && (
          <Text as="p" color="background" fontSize={1}>
            In the meantime, shoot us your email and we'll let you know as soon
            as reservations open.
          </Text>
        )}
      </Section>

      {!active ? (
        <NetlifyForm name="Email Capture Form" honeypotName="bot-field">
          {({ handleChange, success, error }) => (
            <>
              <Honeypot />
              {success && (
                <FormFeedback
                  type="success"
                  message="Thanks for visiting us!"
                />
              )}
              {error && (
                <FormFeedback
                  type="error"
                  message="Sorry, something went wrong. Please refresh and
                try again."
                />
              )}
              {!success && !error && (
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
                        onChange={handleChange}
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
                        onChange={handleChange}
                      />
                    </Box>
                  </Box>
                  <button type="submit" value="submit">
                    Submit
                  </button>
                </fieldset>
              )}
            </>
          )}
        </NetlifyForm>
      ) : (
        <NetlifyForm name="Static Form" honeypotName="bot-field">
          {({ handleChange, success, error }) => (
            <>
              <Honeypot />
              {success && (
                <FormFeedback
                  type="success"
                  message="Thanks for visiting us!"
                />
              )}
              {error && (
                <FormFeedback
                  type="error"
                  message="Sorry, something went wrong. Please refresh and
                try again."
                />
              )}
              {!success && !error && (
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
                        onChange={handleChange}
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
                        onChange={handleChange}
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
                        onChange={handleChange}
                      />
                    </Box>
                    <Box width={[1, 1, 1 / 2]} className="form-group__box">
                      <label htmlFor="phone">Phone:</label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        placeholder="___-___-____"
                        onChange={handleChange}
                      />
                    </Box>
                  </Box>
                  <Box width={1} className="form-group">
                    <Box width={[1, 1, 1 / 2]} className="form-group__box">
                      <label htmlFor="fiveHunGal">
                        # of 500 gal tanks needed:
                      </label>
                      <input
                        type="number"
                        name="fiveHunGal"
                        id="fiveHunGal"
                        // placeholder="# of 500 gal. tanks needed"
                        placeholder="out of 500 gal. tanks"
                        onChange={handleChange}
                        disabled={true}
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
                        // placeholder="# of 1000 gal. tanks needed"
                        placeholder="out of 1000 gal. tanks"
                        onChange={handleChange}
                        disabled={true}
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
                        onChange={handleChange}
                      />
                    </Box>
                    <Box width={[1, 1, 1 / 2]} className="form-group__box">
                      <label htmlFor="rv"># of RVs:</label>
                      <input
                        type="number"
                        name="rv"
                        id="rv"
                        placeholder="# of RVs"
                        onChange={handleChange}
                      />
                    </Box>
                  </Box>
                  <button type="submit" value="submit">
                    Submit
                  </button>
                </fieldset>
              )}
            </>
          )}
        </NetlifyForm>
      )}
    </S.ReservationForm>
  )
}

export default ReservationForm
