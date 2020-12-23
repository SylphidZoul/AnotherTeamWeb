import styled, { css } from 'styled-components'

export const Form = styled.form`
  width: 100%;
  padding: 32px 28px 20px 20px;
  background-color: rgba(0, 0, 0, 0.2);
  border: 1px double var(--mainBlue);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    padding: 32px 68px 20px 60px;
  }
`

export const H3 = styled.h3`
  margin-bottom: 48px;
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

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 32px;
`

export const LabelWrapper = styled.div`
  position: absolute;
  top: -15px;
  &:after {
    position: absolute;
    content: "";
    display: block;
    height: 2px;
    width: 32px;
    background: var(--mainBlue);
    right: -29px;
    clip-path: polygon(0 0, calc(100% - 2px) 0%, 100% 100%, 0% 100%);
    bottom: 0;
  }
`

export const Label = styled.label`
  position: relative;
  display: block;
  height: 16px;
  background: var(--mainBlue);
  left: 0px;
  color: rgba(240, 240, 240, 0.8);
  font-size: 8px;
  font-family: '8bits';
  letter-spacing: 1.25px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 100%, 0% 100%);
`

export const InputBorder = styled.div`
  position: relative;
  border: 2px solid var(--mainBlue);
  padding: 0 12px;
  clip-path: polygon(0% 0%, calc(100% - 8px) 0,
                    100% 8px, 100% 100%, 95% 100%,
                    calc(0% + 8px) 100%, 0% calc(100% - 8px),
                    0% calc(100% + 8px)
  );
  &:before, &:after{
    content: "";
    height: 2px;
    width: 11.5px;
    background: var(--mainBlue);
    display: block;
    position: absolute;
    z-index: 100;
    transform: rotate(45deg);
    border-radius: 5px;
  }
  &:before {
    right: -3.1px;
    top: 1.6px;
  }
  &:after {
    left: -3.1px;
    bottom: 1.6px;
  }
`

export const InputTail = styled.span`
  position: absolute;
  content: "";
  display: block;
  height: 4px;
  width: 30%;
  background: var(--mainBlue);
  right: 0px;
  clip-path: polygon(0 0, 100% 0%, 100% 100%, calc(0% + 4px) 100%);
  bottom: -3px;
`

const sharedInputStyles = css`
  width: 100%;
  font-size: 14px;
  background: transparent;
  color: rgba(255, 255, 255, 0.7);
  border: none;
  outline: none;
`

export const Input = styled.input`
  ${sharedInputStyles}
  height: 32px;
`

export const TextArea = styled.textarea`
  ${sharedInputStyles}
  height: 64px;
  font-family: initial;
  padding-top: 8px;
  resize: vertical;
`

export const ButtonWrapper = styled.div`
  min-width: 40%;
  max-width: 55%;
  position: relative;
  `

export const Button = styled.button`
  ${sharedInputStyles}
  font-size: 8px;
  letter-spacing: 2px;
  color: rgba(255, 255, 255, 0.7);
  height: 48px;
  cursor: pointer;
  font-family: '8Bits';
  text-shadow: 0 0 10px var(--mainBlue),
               0 0 20px var(--mainBlue),
               0 0 40px var(--mainBlue);
  &:hover {
    background: linear-gradient(90deg,
      rgba(0,0,0,0) 0%, rgba(var(--rgbBlue),0.8) 30%,
      rgba(var(--rgbBlue),0.8) 70%, rgba(0,0,0,0) 100%
    );
  }
`
