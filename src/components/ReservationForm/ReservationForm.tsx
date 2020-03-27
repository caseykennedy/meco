// Reservation form:

// ___________________________________________________________________

// Core
import React, { useState, useRef } from 'react'
import { Formik } from 'formik'
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
const encode = (data: any) => {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)} = ${encodeURIComponent(data[key])}`)
    .join('&')
}

const ReservationForm = () => {
  // const [state, setState] = React.useState({})
  // const handleChange = (e: any) => {
  //   setState({ ...state, [e.target.name]: e.target.value })
  // }
  // const handleSubmit = (e: any) => {
  //   e.preventDefault()
  //   const form = e.target

  //   console.log('====================================')
  //   console.log(
  //     encode({
  //       'form-name': form.getAttribute('name'),
  //       ...state
  //     })
  //   )
  //   console.log('====================================')

  //   fetch('/', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  //     body: encode({
  //       'form-name': form.getAttribute('name'),
  //       ...state
  //     })
  //   })
  //     .then(response => {
  //       console.log('====================================')
  //       console.log(`${JSON.stringify(response, null, 2)}`)
  //       console.log('====================================')
  //     })
  //     // .then(() => alert('success'))
  //     .catch(error => {
  //       console.log('====================================')
  //       console.log(`error in submiting the form data:${error}`)
  //       console.log('====================================')
  //     })
  // }
  // console.log(state)
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
      <Formik
        initialValues={{
          name: '',
          campName: '',
          phone: '',
          email: '',
          fiveHunGal: '',
          thousandGal: '',
          privateContainers: '',
          rv: '',
          details: ''
        }}
        // validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          fetch('/?no-cache=1', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
              'form-name': 'res formik',
              ...values
            })
          })
            .then(() => {
              alert('Success!')
              setSubmitting(false)
            })
            .then(response => {
              console.log('====================================')
              console.log(`${JSON.stringify(response, null, 2)}`)
              console.log(values)
              console.log('====================================')
            })
            .catch(error => {
              console.log(error)
              alert('Error: Please Try Again!')
              setSubmitting(false)
            })
        }}
        render={({
          errors,
          touched,
          isSubmitting,
          handleSubmit,
          handleReset
        }) => (
          <form
            // Using class instead of SC for Netlify form
            className="reservation-form"
            name="res formik"
            onSubmit={handleSubmit}
            onReset={handleReset}
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input
              type="hidden"
              // readOnly={true}
              name="form-name"
              value="res formik"
            />
            <div style={{ display: 'none' }}>
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </div>
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
                  <input
                    type="number"
                    name="rv"
                    id="rv"
                    placeholder="# of RVs"
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
            <button
              type="submit"
              value="Submit Request"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </form>
        )}
      />
    </S.ReservationForm>
  )
}

export default ReservationForm
