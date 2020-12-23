import { useLoader } from 'react-three-fiber'
import { TextureLoader } from 'three'
import SunImage from '../textures/Sun.png'

export const Sun = () => {
  const [SunTexture] = useLoader(TextureLoader, [SunImage])

  return (
    <mesh
      position={[0, 15, -42]}
    >
      <circleGeometry attach='geometry' args={[15, 20]} />
      <meshBasicMaterial attach='material' map={SunTexture} transparent fog={false} />
    </mesh>
  )
}
