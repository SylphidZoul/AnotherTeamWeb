import React, { useContext } from 'react'
import { MainWrapper } from '../assets/styled-components/StyledSection'
import { Burger } from '../components/Burger'
import { AngleContext } from '../context/AngleContext'
import Hologram from '../components/HologramWindow'
import Nurien from '../assets/img/nurien1.png'
import Uno from '../assets/img/uno1.png'
import Lorem from '../assets/img/lorem.jpg'

const Portfolio = () => {
  const { cameraAngle, handleCameraAngle } = useContext(AngleContext)

  return (
    <>
      {
        cameraAngle === 'left' && (
          <MainWrapper>
            <Burger onClick={() => handleCameraAngle('center')} modal='modal' />
            <Hologram Width='600px' Height='380px' Name='Nurien' Src={Nurien} link='https://www.nurienstudio.com/' />
            <Hologram Width='600px' Height='380px' Name='Uno' Src={Uno} />
            <Hologram Width='600px' Height='380px' Name='Lorem' Src={Lorem} />
          </MainWrapper>
        )
      }
    </>
  )
}

export default Portfolio