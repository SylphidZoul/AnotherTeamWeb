import React, {createContext, useState } from 'react'

const AngleContext = createContext()
const { Provider, Consumer } = AngleContext

const AngleContextProvider = (props) => {
  const [ cameraAngle, setCameraAngle ] = useState('center')

  const handleCameraAngle = (direction) => {
    /* if (e.target.textContent === '') setAngle('Nosotros') */
    setCameraAngle(direction)
  }

  return (
    <Provider value={{cameraAngle, handleCameraAngle}}>
      {props.children}
    </Provider>
  )
}

export {AngleContextProvider, Consumer, AngleContext }
