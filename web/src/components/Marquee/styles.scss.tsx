import styled from 'styled-components'
import theme from '../../../config/theme'

// ___________________________________________________________________

export const Marquee = styled.div`
  .marquee-container {
    padding: var(--space-md) 0;
  }

  .marquee {
    display: flex;
    justify-content: space-between;
    color: var(--color-text-muted);
    font-weight: 500;

    & > * {
      padding: 0 ${theme.space[1]};
    }
  }
`

export default Marquee
