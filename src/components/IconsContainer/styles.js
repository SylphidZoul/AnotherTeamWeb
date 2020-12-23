import styled from 'styled-components'
import { openHologram } from '../../styles/Animations'

export const MainWrapper = styled.div`
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  border: 3px inset var(--mainLightPink);
  padding: 12px;
  opacity: 0;
  animation: ${openHologram} 1s ease-in 0.9s forwards;
`

export const IconsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`

export const IconsTitle = styled.h4`
  font-size: 12px;
  font-family: '8Bits';
  color: var(--mainWhite);
  font-weight: 400;
  text-shadow: 0 0 10px var(--mainBlue);
  margin-bottom: 8px;
`

export const IconDiv = styled.div`
  display: flex;
  min-height: 72px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 4px 0 4px;
  padding: 8px;
`

export const IconName = styled.span`
  color: var(--mainWhite);
  font-family: '8Bits';
  font-size: 8px;
  text-shadow: 0 0 10px var(--mainBlue);
`
