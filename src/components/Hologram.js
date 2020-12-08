import React from 'react'
import { HologramWindow, HologramWrapper } from '../assets/styled-components/StyledSection'

const Hologram = ({ Width, Height, Name, Src, children, link }) => {
  return (
    <a href={link} target='_blank' rel="noopener noreferrer">
      <HologramWrapper height={Height} width={Width} name={Name}>
        <HologramWindow>
          {Src &&
            <img src={Src} alt={Name} />}
          {children}
        </HologramWindow>
      </HologramWrapper>
    </a>
  )
}

export default Hologram
