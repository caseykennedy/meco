// Homepage Styles:
// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'
import { Flex } from '../../elements'
import theme from '../../../config/theme'

// ___________________________________________________________________

export const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 2px;

  border-bottom: ${theme.border};
  
  position: relative;
  margin-top: 0;

  @media ${theme.mq.small} {
    flex-direction: row-reverse;
    /* top: calc(${theme.headerHeight}); */
  }
`

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  /* width: 100%; */
  padding-top: ${theme.space[4]};

  background: ${theme.colors.background};

  /* @media ${theme.mq.small} {
    max-width: calc(calc(100% - ${theme.headerHeight}) - 2px);
  } */
`

export const Indent = styled.div`
  flex-direction: column;
  /* justify-content: flex-start; */
  align-items: center;

  background: ${theme.colors.background};

  width: ${theme.headerHeight};
  /* height: auto; */
  padding: ${theme.space[4]} 0;

  display: none;

  @media ${theme.mq.small} {
    display: flex;
  }
`

export const Marker = styled.div`
  font-weight: 500;
  letter-spacing: 1.5px;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  text-transform: uppercase;
  position: sticky;
  top: calc(${theme.headerHeight} + ${theme.space[4]});
`

export const VerticalText = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 ${theme.space[4]} ${theme.space[4]};

  font-size: calc(${theme.root.font.xxxl} / 1.75);
  line-height: calc(${theme.root.font.headingLineHeight} / 1.15);
  /* writing-mode: vertical-lr; */
  /* text-orientation: mixed; */

  @media ${theme.mq.medium} {
    font-size: ${theme.root.font.xxl};
  }
`

export const Drips = styled.div`
  position: fixed;
  width: 54vw;

  top: 50vh;
  right: 0;

  z-index: 99;

  @media ${theme.mq.medium} {
    width: 30vw;
    top: 37vh;
    right: 0;
    transform: translateX(50%);
  }

  svg {
    width: 100%;
  }
`

export const Illustration = styled(Flex)`
  svg {
    width: 100%;
  }
`

export const Services = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: space-between;

  li {
    flex: 1 1 auto;
    align-self: auto;
    width: 100%;
    box-sizing: border-box;
    padding: ${theme.space[3]} ${theme.space[4]};
    border-bottom: ${theme.border};
    list-style: none;
    text-transform: uppercase;

    font-size: ${theme.fontSizes[1]};
    font-weight: ${theme.fontWeights.medium};

    span {
      margin-right: ${theme.space[1]};
    }
  }
`

export const ReserveBtn = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;

  color: ${theme.colors.white};
  text-transform: uppercase;
  font-size: ${theme.fontSizes[3]};
  font-weight: ${theme.fontWeights.medium};
  text-align: center;
  line-height: 1;
  letter-spacing: 1.5px;

  background: ${theme.colors.secondary};
  height: 164px;
  padding: ${theme.space[7]} ${theme.space[1]};

  cursor: pointer;
  transition: all 0.333s ease-in-out;

  span {
    font-size: ${theme.fontSizes[2]};
    position: relative;
    top: -4px;
    left: 0;
    margin-left: ${theme.space[3]};

    transition: ${theme.transition.all};
  }

  &:hover {
    background: ${darken(0.05, `${theme.colors.secondary}`)};

    span {
      left: ${theme.space[5]};
    }
  }

  &.active {
    background: ${theme.colors.primary};
  }
`

export const Highlight = styled.div`
  width: 100%;
  padding: ${theme.space[4]};
  border: ${theme.border};
  border-right-width: 6px;
  border-bottom-width: 6px;

  &:nth-child(odd) {
    margin-bottom: ${theme.space[4]};

    @media ${theme.mq.small} {
      margin-bottom: 0;
    }
  }

  @media ${theme.mq.small} {
    width: calc(50% - calc(${theme.space[4]} / 2));
  }

  &.emphasized {
    background: ${theme.colors.primary};
    color: ${theme.colors.background};
  }

  .rental {
    &__title {
      font-weight: 500;
      border-bottom: ${theme.border};
      margin-bottom: ${theme.space[4]};
    }

    &__price {
      padding: ${theme.space[1]};
      margin-top: ${theme.space[4]};
      background: ${theme.colors.secondary};
      color: ${theme.colors.background};
      font-size: ${theme.fontSizes[1]};
      font-weight: 600;
      text-align: right;
    }
  }
`
