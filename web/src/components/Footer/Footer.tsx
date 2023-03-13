// Footer:
// Global site footer

// ___________________________________________________________________

import * as React from 'react'

import { Heading, Text, Box } from '../../elements'

import theme from '../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

const Footer: React.FC = () => {
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
          <Text as="p">
            <Text as="span" fontWeight={500}>
              Tim McKinnies
            </Text>
            P: <a href="tel:+17757623963">775 762-3963</a>
            <br />
            E: <a href="mailto:MECOTim775@gmail.com">MECOTim775@gmail.com</a>
          </Text>
          <Text as="p">
            <Text as="span" fontWeight={500}>
              Amanda McKinnies
            </Text>
            E:{' '}
            <a href="mailto:MECOAmanda775@gmail.com">MECOAmanda775@gmail.com</a>
          </Text>
        </Box>
      </S.Content>
    </S.Footer>
  )
}

export default Footer
