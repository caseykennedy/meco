// Sidebar Styles:
// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'
import theme from '../../../config/theme'

// ___________________________________________________________________

export const Sidebar = styled.aside`
  display: flex;
  max-width: 100%;
  padding-left: 0;
  position: relative;
  z-index: 0;
  transition: all 0.333s ease-in-out;

  @media ${theme.mq.medium} {
    /* padding-left: 2px; */
    /* top: ${theme.headerHeight}; */
    max-width: calc(50% - 32px);
    right: 0;
  }
`

export const SidebarInner = styled.div`
  display: flex;
  flex-direction: column;

  max-height: calc(100vh - ${theme.headerHeight});
  /* height: calc(100vh - ${theme.headerHeight}); */
  width: 100%;

  overflow: auto;
  position: sticky;
  top: ${theme.headerHeight};

  .gallery {
  }
`

export const ReserveBtn = styled.div`
  /* display: none; */
  display: flex;

  align-items: center;
  justify-content: center;
  flex-grow: 1;

  color: ${theme.colors.white};
  text-transform: uppercase;
  font-size: ${theme.fontSizes[2]};
  font-weight: ${theme.fontWeights.medium};
  text-align: center;
  line-height: 1;
  letter-spacing: 1.5px;

  /* margin-top: 2px; */
  padding: ${theme.space[6]} 0;

  cursor: pointer;
  transition: all 0.333s ease-in-out;

  @media ${theme.mq.small} {
    display: flex;
    font-size: ${theme.fontSizes[3]};
    padding: ${theme.space[7]} 0;
  }

  .icon {
    display: flex;
    align-items: center;
    margin-left: ${theme.space[3]};
    position: relative;
    left: 0;
    font-size: ${theme.fontSizes[2]};
    transition: ${theme.transition.all};

    svg {
      width: 22px;

      @media ${theme.mq.small} {
        width: initial;
      }
    }
  }

  &:hover {
    background: ${darken(0.05, `${theme.colors.primary}`)};

    .icon {
      left: ${theme.space[3]};
    }
  }
`
