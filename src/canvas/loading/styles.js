import styled, { keyframes } from 'styled-components'
import { Html } from 'drei'

const dots = keyframes`
  0%, 20% {
    content: '.'
  }
  40% {
    content: '..'
  }
  60% {
    content: '...'
  }
  90%, 100% {
    content: ''
  }
`

const navGrow = keyframes`
  0% {
    width: 0;
    left: 100%;
  }
  70% {
    width: 10px;
    left: 0;
  }
  100% {
    width: 100%;
    left: 0;
  }
`

export const LoadingWrapper = styled(Html)`
  width: 320px;
  display: flex;
  justify-content: center;
  padding-bottom: 16px;
  &:before, &:after {
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      animation: ${navGrow} 1000ms forwards ease-in-out;    
    }
    &:before {
      height: 5px;
      transform: translateY(2px);
      background: var(--mainLightPink);
      filter: blur(6px);
      z-index: 999;
    }
    &:after {
      height: 1px;
      background: var(--mainLightPink);
      filter: blur(0);
      z-index: 998;
    }
`

export const H2 = styled.h2`
  font-size: 36px;
  font-weight: 400;
  font-family: 'Quantum';
  letter-spacing: 4px;
  color: var(--mainLightPink);
  text-shadow:
    0 0 20px var(--mainLightPink),
    0 0 40px var(--mainLightPink),
    0 0 80px var(--mainLightPink);
  &::after {
    animation: ${dots} 2s linear infinite;
    content: '';
  }
`