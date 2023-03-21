// Accordion Styles:
// ___________________________________________________________________

import styled from 'styled-components'
import { motion } from 'framer-motion'
import theme from '../../../config/theme'
// import breakpoint from '../../utils/breakpoint'

// ___________________________________________________________________

export const AccordionContainer = styled(motion.div)`
  border-bottom: ${theme.border};
  position: relative;
  width: 100%;
`

export const AccordionInner = styled.div`
  display: flex;
  flex-direction: column;
`

export const AccordionToggle = styled(motion.div)`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  /* color: var(--color-heading); */
  /* font-size: var(--text-lg); */
  cursor: cell;

  padding: ${theme.space[5]} ${theme.space[3]};

  outline: none;
  transition: ${theme.transition.all};

  @media ${theme.mq.small} {
    padding: ${theme.space[5]} ${theme.space[4]};
  }

  &:last-child {
    margin-bottom: 0;
  }

  &.open,
  &:hover {
    background: ${theme.colors.secondary};
    color: ${theme.colors.background};
  }
`

export const AccordionContent = styled(motion.div)`
  overflow: hidden;
  /* transition: var(--transition-all); */

  .content {
    flex-wrap: wrap;
    padding: ${theme.space[3]};

    @media ${theme.mq.small} {
      padding: ${theme.space[4]};
    }
  }
`

export const Carat = styled(motion.div)`
  display: flex;
  align-items: center;
  transition: var(--transition-all);

  svg {
    fill: ${theme.colors.text};
    width: inherit;
  }
`
