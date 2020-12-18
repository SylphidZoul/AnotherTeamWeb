import styled from 'styled-components'

export const ToastWrapper = styled.div`
  position: absolute;
  margin: 0 auto;
  width: 50%;
  bottom: 20px;

  @media screen and (min-width: 480px) {
    bottom: 32px;
  }
`

export const Message = styled.p`
  width: 100%;
  padding: 16px 0;
  border: 2px solid var(--mainLightPink);
  background: rgba(0, 0, 0, 0.2);
  color: var(--mainWhite);
  text-align: center;
  font-family: '8Bits';
  font-size: 10px;
`