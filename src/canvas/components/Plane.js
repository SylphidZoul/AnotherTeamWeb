import React, { useEffect } from 'react'
import * as THREE from 'three'
import { useLoader } from 'react-three-fiber'
import SynthSquare from '../textures/square.png'
import { useToggleColor } from '../../hooks/useToggleColor'

export const Plane = () => {
  const [ ref ] = useToggleColor(true)
  const [textures] = useLoader(THREE.TextureLoader, [SynthSquare])

  useEffect(() => {
    textures.wrapS = THREE.RepeatWrapping
    textures.wrapT = THREE.RepeatWrapping
    textures.repeat.set(34, 34)
    ref.current.material.map.needsUpdate = true
    // eslint-disable-next-line
  }, [])

  return (

    <mesh
      ref={ref}
      position={[0, 0, -14]}
      rotation={new THREE.Euler(Math.PI / -2, 0, 0)}
    >
      <planeGeometry attach='geometry' args={[75, 75, 1, 1]} />
      <meshLambertMaterial attach='material' color='rgb(4,7,150)' map={textures} />
    </mesh>
  )
}
