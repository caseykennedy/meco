// Reservation form:

// ___________________________________________________________________

// Core
import React, { useState } from 'react'
import { navigate } from 'gatsby-link'
import { useTransition } from 'react-spring'

import Section from '../Section'

import { Box, Flex, AnimatedBox, Heading, Text } from '../../elements'
import Button from '../../elements/Button'

import * as S from './styles.scss'
import theme from '../../../config/theme'

// ___________________________________________________________________

// Encode form
// TODO: use correct types
function encode(data: any) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)} = ${encodeURIComponent(data[key])}`)
    .join('&')
}

const Form = () => {
  // Handle form submit
  // TODO: use correct types for (e)
  const [state, setState] = React.useState({
    name: '',
    campName: '',
    email: '',
    tel: '',
    fiveHunGal: '',
    thousandGal: '',
    privateContainers: '',
    rv: '',
    details: ''
  })
  const handleChange = (e: any) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e: any) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state
      })
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }
  console.log(state)
  return (
    <S.Form
      name="Reservations"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="bot-field" onChange={handleChange} />
      <input type="hidden" name="form-name" value="Reservations" />
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
              value={state.name}
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
              value={state.campName}
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
              value={state.email}
            />
          </Box>
          <Box width={[1, 1, 1 / 2]} className="form-group__box">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="___ ___-____"
              onChange={handleChange}
              value={state.tel}
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
              onChange={handleChange}
              value={state.fiveHunGal}
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
              onChange={handleChange}
              value={state.thousandGal}
            />
          </Box>
        </Box>
        <Box width={1} className="form-group">
          <Box width={[1, 1, 1 / 2]} className="form-group__box">
            <label htmlFor="privateContainers"># of private containers:</label>
            <input
              type="number"
              name="privateContainers"
              id="privateContainers"
              placeholder="# of private containers"
              onChange={handleChange}
              value={state.privateContainers}
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
              value={state.rv}
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
            onChange={handleChange}
            value={state.details}
          />
        </Box>
      </fieldset>
      <button type="submit" value="Submit Request">
        Submit
      </button>
    </S.Form>
  )
}

const ReservationForm: React.FC = () => {
  return (
    <S.ReservationForm>
      <Section pt={4} border={true}>
        <Heading fontSize={[4, 5]} pr={[0, 6]} mb={0}>
          Don't get left in the dust.
        </Heading>
      </Section>
      <Section pt={4} border={true}>
        <Text as="p">
          Our mission here at MECO Sales &amp; Rentals is Awareness spiral
          east-west, rolfing peacock feather synchronicity. Dead sea minerals
          Spirit Rock.
        </Text>
      </Section>
      <Form />
    </S.ReservationForm>
  )
}

export default ReservationForm
