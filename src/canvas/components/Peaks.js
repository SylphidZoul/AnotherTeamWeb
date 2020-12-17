import React, { useEffect } from 'react'
import * as THREE from 'three'
import { useLoader } from 'react-three-fiber'
import Square from '../textures/square.png'
import { useToggleColor } from '../../hooks/useToggleColor'

export const Peaks = () => {
  const [ ref ] = useToggleColor(true)
  const [ texture ] = useLoader(THREE.TextureLoader, [Square])

  const generateRandomPeaks = () => {
    ref.current.geometry.vertices.forEach(vertice => {
      if (vertice.x > 3 || vertice.x < -3) {
        if (vertice.y < 4 && vertice.y > -6) {
          vertice.z = (Math.random() > 0.2) ? Math.random() * 7 : 0
        } else {
          if (vertice.x > 15 || vertice.x < -15) {
            if (vertice.y < -6) {
              vertice.z = (Math.random() > 0.4) ? Math.random() * 9 : 0
            }
          }
        }
      } else {
        if (vertice.y < 4 && vertice.y > -6) {
          vertice.z = (Math.random() > 0.2) ? Math.random() * 5 : 0
        }
      }
    })
    ref.current.geometry.verticesNeedUpdate = true
  }

  useEffect(() => {
    generateRandomPeaks()
    // eslint-disable-next-line
  }, [])

  return (
    <mesh
      ref={ref}
      position={[0, -0.2, -14]}
      rotation={new THREE.Euler(Math.PI / -2, 0, 0)}
    >
      <planeGeometry attach='geometry' args={[75, 75, 34, 34]} />
      <meshLambertMaterial attach='material' color='rgb(4,7,150)' map={texture} />
    </mesh>
  )
}
