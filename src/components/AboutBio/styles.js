import styled from 'styled-components'
import { openHologram } from '../../styles/Animations'

export const BioWrapper = styled.div`
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  border: 3px inset var(--mainLightPink);
  padding: 12px;
  opacity: 0;
  animation: ${openHologram} 1s ease-in 0.9s forwards;
`

export const Title = styled.h4`
  font-size: 12px;
  font-family: '8Bits';
  color: var(--mainWhite);
  font-weight: 400;
  text-shadow: 0 0 10px var(--mainBlue);
  margin-bottom: 8px;
`

export const P = styled.p`
  text-align: center;
  color: white;
  line-height: 24px;
  padding: 8px;
`

export const Strong = styled.strong`
  font-weight: 400;
  text-shadow: 0 0 10px var(--mainBlue);
`

export const Download = styled.a`
  display: block;
  width: 100%;
  padding: 8px 0;
  background: transparent;
  color: var(--mainWhite);
  width: 100%;
  font-size: 10px;
  letter-spacing: 2px;
  font-family: '8Bits';
  text-decoration: none;
  text-align: center;
  text-shadow: 0 0 10px var(--mainBlue);
  &:hover {
    background: linear-gradient(90deg,
      rgba(0,0,0,0) 0%, rgba(var(--rgbLightPink),0.8) 30%,
      rgba(var(--rgbLightPink),0.8) 70%, rgba(0,0,0,0) 100%
    );
  }
`
