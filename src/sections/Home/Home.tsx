// Cursor:

// ___________________________________________________________________

// Core
import React from 'react'

// Components
import Section from '../../components/Section'

// Elements
import { Box, Flex, Heading } from '../../elements'
import Divider from '../../elements/Divider'

// Styles
import * as S from './styles.scss'

// Theme
import theme from '../../../config/theme'

// ___________________________________________________________________

type Props = {}

const Home: React.FC = () => {
  return (
    <S.Container>
      <S.Indent>
        <S.Marker>a</S.Marker>
      </S.Indent>
      <S.Content>
        <Box>
          <Heading as="h1" color="secondary">
            Portable
            <br />
            water
            <br />
            services
          </Heading>
        </Box>
        <Divider py={10} />
      </S.Content>
    </S.Container>
  )
}

export default Home

// ___________________________________________________________________
