import styled, { css } from 'styled-components'
import { openHologram } from '../../styles/Animations'

export const HologramWrapper = styled.div`
  position: relative;
  width: 100%;
  animation: ${openHologram} 1s ease;
  filter: drop-shadow(0px 0px 12px var(--mainPink));
  z-index: 10;

  &:before, &:after{
    position: absolute;
    content: '';
    background: var(--mainLightPink);
  }

  ${props => props.name && css`
    &:before{
      height: 8%;
      width: 30%;
      top: -7.8%;
      left: 4%;
      clip-path: polygon(18% 0, 82% 0%, 100% 100%, 0% 100%);
      color: rgba(0, 0, 0, 0.5);
      content: '${props => props.name}';
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 8px;
      font-family: '8Bits';
    }
  `}


  &:after{
    height: 3%;
    width: 30%;   
    left: 60%;
    clip-path: polygon(0 0, 100% 0%, 90% 100%, 10% 100%);
    bottom: -2.7%;
  }

  @media (min-width: 1024px){
    &:before{
      font-size: 80%;
    }
  }

  ${props => props.colorVariant  && css`
    filter: drop-shadow(0px 0px 12px var(--mainDarkBlue));
    &:before, &:after{
      background: var(--mainBlue);
    }
  `}
`

export const HologramWindow = styled.div`
  width: 100%;
  height: 100%;
  padding: 3% 2%;
  border: 5px solid var(--mainLightPink);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(var(--rgbPink), 0.4);
  clip-path: polygon(
    0 6%, 4% 0, 43% 0, 48% 5%, 80% 5%, 85% 0,
    96% 0, 100% 6%, 100% 25%, 96% 30%, 96% 50%,
    100% 55%, 100% 94%, 96% 100%, 45% 100%,
    40% 95%, 23% 95%, 18% 100%, 4% 100%, 0 94%
  );

  & a {
    width: 100%;
  }

  ${props => props.colorVariant && css`
    border: 5px solid var(--mainBlue);
    background: rgba(var(--rgbDarkBlue), 0.4);
  `}

  ${props => props.vertical && css`
    clip-path: polygon(
      0 4%, 4% 0, 43% 0, 48% 2%, 80% 2%, 85% 0,
      96% 0, 100% 4%, 100% 25%, 96% 30%, 96% 50%,
      100% 55%, 100% 96%, 96% 100%, 45% 100%,
      40% 98%, 23% 98%, 18% 100%, 4% 100%, 0 96%
    );
  `}
`