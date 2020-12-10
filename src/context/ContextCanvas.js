import React, { useContext } from 'react'
import { Canvas } from 'react-three-fiber'
import { AngleContext } from './AngleContext'

// Context Bridge to canvas tree

const ForwardCanvas = ({ children }) => {
  const { cameraAngle, handleCameraAngle } = useContext(AngleContext)

  return (
    <Canvas concurrent>
      <AngleContext.Provider value={{ cameraAngle, handleCameraAngle }}>
        {children}
      </AngleContext.Provider>
    </Canvas>
  )
}

export default ForwardCanvas
