import { useRef } from 'react'
import { TextureLoader } from 'three'
import { useLoader, useFrame, useThree } from 'react-three-fiber'
import { useGesture } from 'react-use-gesture'
import { useSpring, a } from 'react-spring/three'
import Sylphid from '../textures/window.png'

export const Logo = () => {
  const { clock, size, viewport } = useThree()
  const [texture] = useLoader(TextureLoader, [Sylphid])
  const ref = useRef()
  const [props, setProps] = useSpring(() => ({
    scale: [1, 1, 1],
    position: [0, 1.7, -6]
  })
  )

  const bind = useGesture({
    onDrag: ({ dragging, movement: [mx] }) => {
      setProps({ position: [dragging ? (mx / (size.width / viewport.width)) : 0, 1.7, -6] })
    },
    onHover: ({ hovering }) => setProps({ scale: hovering ? [1.1, 1.1, 1.1] : [1, 1, 1] })
  }, { pointerEvents: true })

  useFrame(() => {
    ref.current.position.y = 1.7 + Math.cos(Math.sin(clock.elapsedTime))
    ref.current.material.color.b = 0.1 + Math.cos(Math.sin(clock.elapsedTime))
    ref.current.material.color.r = 0.1 + Math.cos(Math.sin(clock.elapsedTime))
    ref.current.material.color.g = 0.1 + Math.cos(Math.sin(clock.elapsedTime))
  })

  return (
    <a.mesh
      {...props} {...bind()}
      ref={ref}
    >
      <planeGeometry attach='geometry' args={[6, 4.25, 1, 1]} />
      <meshBasicMaterial attach='material' map={texture} transparent />
    </a.mesh>
  )
}
