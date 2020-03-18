// Footer:
// Global site footer

// ___________________________________________________________________

import * as React from 'react'
import { Link } from 'gatsby'

import { Box, Flex, Text } from '../../elements'
import Section from '../../components/Section'

import theme from '../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

const Year = () => {
  return new Date().getFullYear()
}

const Footer: React.FC = () => {
  return (
    <>
      <Flex
        as="footer"
        flexDirection="column"
        justifyContent="space-between"
        width={1}
        px={theme.gutter}
        py={theme.gutter}
        style={{ minHeight: '100vh' }}
      >
        <Box />
      </Flex>
    </>
  )
}

export default Footer
