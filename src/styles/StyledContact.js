import styled from 'styled-components'

export const MainWrapper = styled.div`
  display: grid;
  grid-template: 28px / 90%;
  grid-auto-rows: minmax(min-content, max-content);
  grid-row-gap: 60px;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  padding: 80px 0 30px;
  background: rgba(0, 0, 0, 0.5);
  transition: all 500ms;

  @media screen and (min-width: 480px) {
    grid-template-columns: minmax(min-content, 352px);
  }

  @media screen and (min-width: 1024px) {
    grid-template: 28px min-content / minmax(min-content, 480px) 330px;
    column-gap: 6%;
    padding: 120px 0 40px;
  }

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
