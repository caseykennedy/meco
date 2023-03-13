// Icon Component Styles:
// ___________________________________________________________________

import styled from 'styled-components'

export const Icon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  /* height: var(--icon-size);
  width: var(--icon-size); */

  color: ${p => (p.color ? p.color : 'var(--color-text)')};

  svg {
    fill: ${p => (p.color ? p.color : 'var(--color-text)')};
    width: var(--icon-size);
  }
`

export default Icon
