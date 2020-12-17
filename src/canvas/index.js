import React, { Suspense } from 'react'
import { MainWrapper } from './styles'
import ForwardCanvas from '../context/ContextCanvas'
import { NowLoading } from './loading/index'

import { SceneCamera } from './components/SceneCamera'
import { Plane } from './components/Plane'
import { RoundedPeaks } from './components/RoundedPeaks'
import { Logo } from './components/Logo'
import { Sun } from './components/Sun'
import { Peaks } from './components/Peaks'
import { PostEffects } from './components/PostEffects'

const Canvas3D = () => {
  return (
    <MainWrapper>
      <ForwardCanvas>
        <Suspense fallback={
          <NowLoading />
        }>
          <ambientLight />
          <hemisphereLight />
          <SceneCamera />
          <Plane />
          <Sun />
          <RoundedPeaks />
          <Peaks />
          <Logo />
          <PostEffects />
        </Suspense>
      </ForwardCanvas>
    </MainWrapper>
  )
}

export default Canvas3D
