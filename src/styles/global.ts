// Global styles

// ___________________________________________________________________

import { createGlobalStyle } from 'styled-components'

import theme from '../../config/theme'

import RootVars from './root'
import Reset from './reset'
import Typography from './typography'

// ___________________________________________________________________

const GlobalStyles = createGlobalStyle`
  ${RootVars}
  ${Reset}
  ${Typography}
  
  body {
    background: ${theme.colors.primary};
    color: ${theme.colors.text};
    
    border: 0;
    margin: 0;
    padding: 0;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  /* Cursor */
  /* html,
  a,
  button {
    cursor: none;

    &:hover {
      cursor: none;
    }
  } */

  #drawer-root {
    position: relative;
    z-index: 100;
  }

  /* hover popup: need to find a new home for this */
  .popup {
    /* mix-blend-mode: difference; */
    pointer-events: none;

    box-shadow: ${theme.shadow};

    position: absolute;
    z-index: 2;
    top: -${theme.space[6]};
    left: 110%;

    visibility: hidden;
    opacity: 0;
    transform: matrix(1, 0, 0, 1, 0, 32);
    transition: ${theme.transition.all};

    &.show {
      visibility: visible;
      opacity: 1;
      transform: matrix(1, 0, 0, 1, 0, 0);
    }
  }
`

export default GlobalStyles

// ___________________________________________________________________
