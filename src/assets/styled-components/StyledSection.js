import styled from 'styled-components'

export const MainWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: ${props => props.home ? '45vh 5vw 0' : '20vh 10vw'};
  background: ${props => props.home ? 'transparent' : 'rgba(0, 0, 0, 0.5)'};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  transition: all 500ms;
`

export const Title = styled.h1`
  width: 25%;
  color: var(--mainWhite);
  font-size: 2.5em;
`
