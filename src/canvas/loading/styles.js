import styled from 'styled-components'
import { animated } from 'react-spring'
import { dots } from '../../styles/Animations'


export const LoadingWrapper = styled(animated.div)`
  width: 320px;
  display: flex;
  justify-content: center;
  padding-bottom: 16px;
`

export const H2 = styled(animated.h2)`
  font-size: 36px;
  font-weight: 400;
  font-family: 'Quantum';
  letter-spacing: 4px;
  &::after {
    animation: ${dots} 2s linear infinite;
    content: '';
  }
`