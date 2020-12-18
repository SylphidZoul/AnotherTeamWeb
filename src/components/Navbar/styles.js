import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { navGrow } from '../../styles/Animations'

export const StyledNav = styled.nav`
  position: fixed;
  width: 100vw;
  height: 52px;
  z-index: 100;
  background: transparent;
  @media screen and (min-width: 768px) {
    position: absolute;
    width: 100%;
    height: 56px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
`

export const ListUL = styled.ul`
  filter: drop-shadow(0px 0px 12px var(--mainDarkBlue));
  position: relative;
  width: 75%;
  height: 100vh;
  padding: 24px;
  border: 10px solid var(--mainBlue);
  border-left: none;
  border-bottom: none;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: rgba(var(--rgbDarkBlue), 0.4);
  clip-path: polygon(0% 0%, 40% 0%, 44% 3%, 66% 3%, 70% 0%, 90% 0%,
                    100% 5%, 100% 20%, 96% 22%, 96% 38%, 100% 40%,
                    100% 68%, 92% 70%, 92% 93%, 100% 95%, 100% 100%, 0% 100%
  );
  transition: all 300ms ease;
  opacity: ${(props) => props.active ? '90%' : '0%'};
  transform: ${(props) => props.active ? 'traslateX(0%)' : 'translateX(-100%)'};
  box-shadow: 0px 0px 25px 10px var(--mainBlue);

  @media screen and (min-width: 480px) {
    width: 40%;
  }
  @media screen and (min-width: 768px) {
    width: 100%;
    height: 100%;
    opacity: 100%;
    transform: none;
    box-shadow: none;
    padding: 0;
    flex-direction: row;
    justify-content: space-evenly;
    background: none;
    border: none;
  }
  @media screen and (min-width: 1024px) {
    width: 50%;
    max-width: 900px;
  }
`

export const ListLi = styled.li`
  @media screen and (min-width: 1024px) {
    position: relative;
    padding: 0 12px;
    height: 100%;
    transition: all 400ms;
    user-select: none;
    display: flex;
    align-items: center;
    &:hover {
      &:before, &:after {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        animation: ${navGrow} 400ms forwards;    
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
    }
  }
`
export const MenuLinks = styled(Link)`
  text-decoration: none;
  font-family: '8Bits';
  font-size: 12px;
  letter-spacing: 4px;
  text-align: center;
  color: var(--mainWhite);
  text-shadow: 0 0 10px #ee04b4,
               0 0 20px #ee04b4,
               0 0 40px #ee04b4,
               0 0 80px #ee04b4;

  @media screen and (min-width: 1024px) {
    display: initial;
    text-align: center;
    line-height: 200%;
    transition: all 1000ms;
    &:hover {
      color: var(--mainLightPink);
    }
  }
`
