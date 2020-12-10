import React from 'react'
import { BurgerDiv, BurgerLine } from './styles'

export const Burger = ({ open = true, modal = false, onClick }) => {
  return (
    <BurgerDiv modal={modal} onClick={onClick}>
      <BurgerLine open={open} first />
      <BurgerLine open={open} second />
      <BurgerLine open={open} third />
    </BurgerDiv>
  )
}
