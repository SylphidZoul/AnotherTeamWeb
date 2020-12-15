import React from 'react'
import { HologramWrapper, HologramWindow } from './styles'

export const Hologram = ({ name, colorVariant, children }) => {
  return (
    <HologramWrapper
      name={name} 
      colorVariant={colorVariant}
    >
      <HologramWindow colorVariant={colorVariant}>
        { children }
      </HologramWindow>
    </HologramWrapper>
  )
}
