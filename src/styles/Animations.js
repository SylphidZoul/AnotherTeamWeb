import { keyframes } from 'styled-components'

export const openHologram = keyframes`
  0% {
    transform: scaleY(0.003) scaleX(0.001);
  }
  50% {
    transform: scaleY(0.003) scaleX(1);
  }
  100% {
    transform: scaleY(1);
    opacity: 1;
  }
`

export const navGrow = keyframes`
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

export const dots = keyframes`
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
