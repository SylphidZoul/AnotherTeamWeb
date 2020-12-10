import styled, { keyframes } from 'styled-components'

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

export const StyledNav = styled.nav`
  position: fixed;
  width: 100vw;
  height: 52px;
  font-family: 'Quantum';
  z-index: 100;
  background: transparent;
  color: var(--mainWhite);
  @media (min-width: 768px) {
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
  transition: all 400ms ease-in;
  opacity: ${(props) => props.active ? '90%' : '0%'};
  transform: ${(props) => props.active ? 'scaleX(1)' : 'scaleX(0)'};
  box-shadow: 0px 0px 25px 10px var(--mainBlue);

  @media (min-width: 480px) {
    width: 40%;
  }
  @media (min-width: 768px) {
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
  @media (min-width: 1024px) {
    position: relative;
    padding: 0 12px;
    height: 100%;
    transition: all 400ms;
    cursor: pointer;
    user-select: none;
    &:hover {
      color: var(--mainLightPink);
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
export const MenuLinks = styled.p`
  font-size: 24px;
  letter-spacing: 4px;
  transition: all 200ms ease;
  text-align: center;
  text-shadow: 0 0 10px #ee04b4,
               0 0 20px #ee04b4,
               0 0 40px #ee04b4,
               0 0 80px #ee04b4;

  @media (min-width: 1000px) {
    display: initial;
    text-align: center;
    line-height: 200%;
  }
`
