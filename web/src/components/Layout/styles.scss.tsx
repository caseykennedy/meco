// Layout Styles:
// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../../config/theme'

// ___________________________________________________________________

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column-reverse nowrap;
  gap: 2px;
  padding-top: ${theme.headerHeight};

  @media ${theme.mq.medium} {
    flex-flow: row nowrap;
  }

  & > * {
    flex: 1;
  }
`

export const Main = styled.main`
  margin-bottom: ${theme.headerHeight};
  position: relative;
  max-height: 100%;
`
