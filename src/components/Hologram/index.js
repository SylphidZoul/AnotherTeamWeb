import React from 'react'
import { HologramWrapper, HologramWindow } from './styles'

export const Hologram = ({ name, colorVariant, vertical, children }) => {
  return (
    <HologramWrapper
      name={name} 
      colorVariant={colorVariant}
    >
      <HologramWindow colorVariant={colorVariant} vertical={vertical}>
        { children }
      </HologramWindow>
    </HologramWrapper>
  )
}
