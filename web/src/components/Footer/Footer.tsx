// Footer:
// Global site footer

// ___________________________________________________________________

import * as React from 'react'

import usePeople from '../../hooks/usePeople'

import { Heading, Text, Box } from '../../elements'

import theme from '../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

const Footer = () => {
  const people = usePeople()
  return (
    <S.Footer>
      <S.Indent>
        <S.Marker>contact us</S.Marker>
      </S.Indent>
      <S.Content>
        <Heading as="h4">
          For Burning Man questions please contact Amanda McKinnies via email.
        </Heading>
        <Box mt={10}>
          {people.map(({ node: person }, idx) => (
            <Text as="p" key={idx}>
              <Text as="span" fontWeight={500}>
                {person.name}
              </Text>
              {person.phone && (
                <>
                  P: <a href={`tel:${person.phone}`}>{person.phone}</a>
                  <br />
                </>
              )}
              E:{' '}
              <a href={`mailto:${person.email}`} rel="noreferrer">
                {person.email}
              </a>
            </Text>
          ))}
        </Box>
      </S.Content>
    </S.Footer>
  )
}

export default Footer
