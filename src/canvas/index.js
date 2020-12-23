import { Suspense } from 'react'
import { MainWrapper } from './styles'
import { Canvas } from 'react-three-fiber'
import { NowLoading } from './loading/index'
import { useLocation } from 'react-router-dom'

import { SceneCamera } from './components/SceneCamera'
import { Plane } from './components/Plane'
import { RoundedPeaks } from './components/RoundedPeaks'
import { Logo } from './components/Logo'
import { Sun } from './components/Sun'
import { Peaks } from './components/Peaks'
import { PostEffects } from './components/PostEffects'

const Canvas3D = () => {
  const location = useLocation()

  return (
    <MainWrapper>
      <Canvas>
        <ambientLight />
        <hemisphereLight />
        <PostEffects />
        <Suspense fallback={<NowLoading />}>
          <SceneCamera location={location} />
          <Plane />
          <Sun />
          <RoundedPeaks />
          <Peaks />
          <Logo />
        </Suspense>
      </Canvas>
    </MainWrapper>
  )
}

export default Canvas3D
