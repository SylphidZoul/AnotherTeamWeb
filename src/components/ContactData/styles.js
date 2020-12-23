import styled from 'styled-components'

export const DataWrapper = styled.section`
  width: 100%;
  padding: 32px 28px 20px 20px;
  background-color: rgba(0, 0, 0, 0.2);
  border: 1px double var(--mainBlue);
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const H3 = styled.h3`
  margin-bottom: 24px;
  text-align: center;
  font-family: '8Bits';
  font-weight: 400;
  font-size: 10px;
  letter-spacing: 3px;
  color: var(--mainWhite);
  text-shadow: 0 0 10px var(--mainBlue),
               0 0 20px var(--mainBlue),
               0 0 40px var(--mainBlue),
               0 0 80px var(--mainBlue);
`

export const Li = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`

export const Anchor = styled.a`
  text-decoration: none;
  color: var(--mainWhite);
  font-size: 14px;

  @media screen and (min-width: 1024px){
    &:hover {
      text-shadow: 0 0 10px var(--mainLightPink),
                  0 0 20px var(--mainLightPink);
    }
  }
`

export const Icon = styled.img`
  width: 32px; 
  border: none;
  margin: 0 8px;
`
