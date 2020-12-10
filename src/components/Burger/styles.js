import styled, { css } from 'styled-components'

const TransformLine = (props) => {
  if (props.first) {
    return css`transform: translateY(10px) rotate(135deg);`
  }
  if (props.second) {
    return css`opacity: 0;`
  }
  if (props.third) {
    return css`transform: translateY(-10px) rotate(-135deg);`
  }
}

export const BurgerDiv = styled.div`
  position: absolute;
  margin-left: 3%;
  top: ${props => props.modal ? '8%' : '20%'};
  right: ${props => props.modal ? '3%' : ''};
  z-index: 10;
  cursor: pointer;
  
  @media (min-width: 768px) {
    display: ${props => props.modal ? 'inline' : 'none'};
    position: fixed;
    left: 2%;
  }
`

export const BurgerLine = styled.div`
  width:30px;
  height:5px;
  margin:5px;
  background-color: var(--mainWhite);
  opacity: 80%;
  box-shadow: 0px 0px 10px 2px var(--mainLightPink);
  transition: all 0.3s ease-in-out;
  ${props => props.open && TransformLine(props)}
`
