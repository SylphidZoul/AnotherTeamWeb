import styled, { css } from 'styled-components'
import { HologramWrapper, HologramWindow } from '../Hologram/styles'
import { openHologram } from '../../styles/Animations'

export const Item = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const StyledScreenshot = styled.img`
  width: 100%;
  padding: 2%;
  border: 3px inset var(--mainLightPink);
  border-radius: 2%; 
  opacity: 0;
  animation: ${openHologram} 1s ease-in 0.9s forwards;

  ${props => props.colorVariant && css`
    border: 3px inset var(--mainBlue);
  `}
`

export const InfoWrapper = styled(HologramWrapper)`
  width: 90%;
  z-index: 1;
  min-height: initial;
  top: -12px;

  &:before, &:after {
    display: none;
  }
`

export const InfoHologram = styled(HologramWindow)`
  border-top: none;
  clip-path: polygon(
    0% 5%, 5% 0%, 95% 0%, 100% 5%, 100% 40%,
    98% 42%, 98% 58%, 100% 60%, 100% 100%,
    62% 100%, 58% 98%, 42% 98%, 38% 100%, 
    0% 100%, 0% 60%, 2% 58%, 2% 42%, 0% 40%
  );
`

export const InfoContent = styled.div`
  text-align: center;
  line-height: 20px; 
  padding: 12px 8px; 
  background: rgba(0,0,0, 0.2); 
  border: 3px inset var(--mainLightPink); 
  color: rgba(240, 240, 240, 0.8);
  opacity: 0;
  animation: ${openHologram} 1s ease-in 0.9s forwards;

  ${props => props.colorVariant && css`
    border: 3px inset var(--mainBlue);
  `}
`

export const P = styled.p`
  text-align: center;
  color: white;
  line-height: 24px;
  padding: 8px;
`

export const Strong = styled.strong`
  font-family: '8Bits';
  font-size: 10px;
  letter-spacing: 2px;
  font-weight: 400;
  text-shadow: ${props => props.colorVariant
    ? '0 0 6px var(--mainLightPink)'
    : '0 0 8px var(--mainBlue)'
  };
`

export const Hr = styled.hr`
  width: 50%;
  border: none;
  border-top: 1px solid var(--mainWhite);
  opacity: 0.2;
  margin-bottom: 16px;
`

export const Icon = styled.img`
  width: 32px; 
  border: none;
  margin: 0 8px;
  @media screen and (min-width: 1024px) {
    &:hover {
      filter: ${props => props.colorVariant
        ? 'drop-shadow(0px 0px 10px var(--mainBlue))'
        : 'drop-shadow(0px 0px 10px var(--mainLightPink))'
      };
    }
  }
`
