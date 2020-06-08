import React from 'react'
import * as THREE from 'three'
import ant from '../../img/ant.png'
import {useLoader} from 'react-three-fiber'


  const Logo = () => {

    const [ texture ] = useLoader(THREE.TextureLoader, [ant])

    return (
      <mesh
        position={[0, 2, -3]}
        >
          <planeGeometry attach="geometry" args={[3, 3.555]} />
          <meshBasicMaterial attach="material" map={texture} transparent />
        </mesh>
    )
  }
export default Logo