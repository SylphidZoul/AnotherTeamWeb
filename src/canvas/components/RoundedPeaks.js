import { useEffect } from 'react'
import * as THREE from 'three'
import { useLoader } from 'react-three-fiber'
import Perlin from '../utils/perlin-noise'
import Square from '../textures/square.png'
import { useToggleColor } from '../../hooks/useToggleColor'

export const RoundedPeaks = () => {
  const [texture] = useLoader(THREE.TextureLoader, [Square])
  const [planeGeo] = useToggleColor()

  const generateRandomRoundedMountains = () => {
    const perlin = new Perlin()
    const peak = 20
    const smoothing = 9
    const vertices = planeGeo.current.geometry.attributes.position.array
    // i = x, i + 1 = y, i + 2 = z
    for (let i = 0; i <= vertices.length; i += 3) {
      if (vertices[i + 1] > 3) {
        if (vertices[i] < -8 || vertices[i] > 8) {
          if (vertices[i] < -18 || vertices[i] > 18) {
            vertices[i + 2] = peak * perlin.noise(vertices[i] / smoothing, vertices[i + 1] / smoothing)
          } else {
            vertices[i + 2] = (peak - 2) * perlin.noise(vertices[i] / smoothing, vertices[i + 1] / smoothing)
          }
        } else {
          vertices[i + 2] = (peak - 7) * perlin.noise(vertices[i] / smoothing, vertices[i + 1] / smoothing)
        }
      }
    }
    planeGeo.current.geometry.attributes.position.needsUpdate = true
  }

  useEffect(() => {
    generateRandomRoundedMountains()
    // eslint-disable-next-line
  }, [])

  return (
    <mesh
      ref={planeGeo}
      position={[0, -0.2, -14]}
      rotation={new THREE.Euler(Math.PI / -2, 0, 0)}
    >
      <planeBufferGeometry attach='geometry' args={[75, 75, 170, 170]} />
      <meshLambertMaterial attach='material' color='rgb(4,7,150)' map={texture} />
    </mesh>
  )
}
