import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { openHologram } from '../../styles/Animations'

export const MainWrapper = styled.section`
  display: grid;
  grid-template: 28px / 90%;
  grid-auto-rows: minmax(min-content, max-content);
  grid-gap: 60px;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  padding: 80px 0 30px;
  background: rgba(0, 0, 0, 0.3);
  transition: all 500ms;

  @media screen and (min-width: 480px) {
    grid-template-columns: 60%;
  }

  @media screen and (min-width: 768px) {
    padding-top: 120px;
  }

  @media screen and (min-width: 1024px) {
    grid-template: 28px min-content / minmax(min-content, 480px) 330px;
    column-gap: 6%;
  }

  ${props => props.portfolioVariant && css`
    @media screen and (min-width: 1024px) {
      grid-template: 28px / repeat(2, minmax(min-content, 512px));
      grid-row-gap: 80px;
      grid-column-gap: 6%;
    }
  `}
`

export const Title = styled.h1`
  text-align: center;
  color: var(--mainWhite);
  font-size: 20px;
  font-family: '8Bits';
  letter-spacing: 5px;
  font-weight: 400;
  text-shadow: 0 0 10px var(--mainLightPink),
               0 0 20px var(--mainLightPink),
               0 0 40px var(--mainLightPink),
               0 0 80px var(--mainLightPink);
  @media screen and (min-width: 1024px) {
    grid-column: span 2;
  }             
`

export const Subtitle = styled.h2`
  text-align: center;
  font-family: '8Bits';
  font-weight: 400;
  font-size: 12px;
  color: var(--mainWhite);
  text-shadow: 0 0 10px var(--mainBlue),
               0 0 20px var(--mainBlue),
               0 0 40px var(--mainBlue),
               0 0 80px var(--mainBlue);
  @media screen and (min-width: 1024px) {
    grid-column: span 2;
  }
`

export const HomeLink = styled(Link)`
  position: fixed;
  width: 33px;
  top: 0;
  right: 3%;
  text-decoration: none;
  z-index: 200;

  @media screen and (min-width: 768px){
    position: absolute;
    top: 11%;
    right: 5%;
  }

  @media screen and (min-width: 1024px) {
    top: 120px;
    right: 7%;
  }
`

export const BackCross = styled.span`
  font-size: 28px;
  color: var(--mainWhite);
  opacity: 0.9;
  font-family: '8Bits';
  text-shadow: 0 0 10px var(--mainLightPink),
               0 0 20px var(--mainLightPink),
               0 0 40px var(--mainLightPink),
               0 0 80px var(--mainLightPink);
`

export const Image = styled.img`
  width: 100%;
  padding: 8%;
  border: 3px inset var(--mainLightPink);
  border-radius: 2%;
  opacity: 0;
  animation: ${openHologram} 1s ease-in 0.9s forwards;
`
