// Sidebar Styles:
// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'
import theme from '../../../config/theme'

// ___________________________________________________________________

export const Sidebar = styled.div`
  display: flex;
  padding-left: 0;
  
  position: relative;
  z-index: 0;
  
  transition: all 0.333s ease-in-out;

  @media ${theme.mq.small} {
    /* padding-left: 2px; */
    /* top: ${theme.headerHeight}; */
    right: 0;
  }
`

export const SidebarInner = styled.div`
  display: flex;
  flex-direction: column;

  max-height: 100vh;
  height: inherit;
  width: 100%;

  overflow: auto;
  position: sticky;
  top: 0;

  .gallery {
  }
`

export const ReserveBtn = styled.div`
  display: none;

  align-items: center;
  justify-content: center;
  flex-grow: 1;

  color: ${theme.colors.white};
  text-transform: uppercase;
  font-size: ${theme.fontSizes[3]};
  font-weight: ${theme.fontWeights.medium};
  text-align: center;
  line-height: 1;
  letter-spacing: 1.5px;

  padding: ${theme.space[4]} ${theme.space[4]};
  margin-top: 2px;

  cursor: pointer;
  transition: all 0.333s ease-in-out;

  @media ${theme.mq.small} {
    display: flex;
    padding: ${theme.space[7]};
  }

  span {
    font-size: ${theme.fontSizes[2]};
    position: relative;
    top: -4px;
    left: 0;
    margin-left: ${theme.space[4]};
    transition: ${theme.transition.all};
  }

  &:hover {
    background: ${darken(0.05, `${theme.colors.primary}`)};

    span {
      left: ${theme.space[5]};
    }
  }
`
