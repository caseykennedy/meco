// Footer:
// Global site footer

// ___________________________________________________________________

import * as React from 'react'

import { Heading, Text } from '../../elements'

import theme from '../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

const Year = () => {
  return new Date().getFullYear()
}

const Footer: React.FC = () => {
  return (
    <S.Footer>
    <S.Indent>
      <S.Marker>contact us</S.Marker>
    </S.Indent>
      <S.Content>
        <Heading as="h4">
          If you can’t find what you are looking for or need special assistance,
          please contact Amanda McKinnies.
        </Heading>
        <Text as="p" mt={10}>
          <Text fontWeight={500}>Amanda McKinnies</Text>
          P: (775) 762-3963
          <br />
          E: MecoAmanda775@gmail.com
        </Text>
      </S.Content>
    </S.Footer>
  )
}

export default Footer
