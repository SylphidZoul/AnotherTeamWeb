import React, { Suspense } from 'react';
import { MainWrapper } from '../styled-components/styled-3d';
import Plane from './3d/Plane'
import Peeks from './3d/Peeks'
import Logo from './3d/Logo';
import Sun from './3d/Sun';
import CameraController from './OrbitControls'
import Peeks2 from './3d/Peeks2';
import SceneCamera from './3d/SceneCamera'
import { Effect } from './3d/Bloom'

import ForwardCanvas from './ContextCanvas'

function Header3D() {
  
  return (
    <MainWrapper>
      <ForwardCanvas>
        {/* <CameraController /> */}
        <ambientLight />
        <hemisphereLight />
        <Suspense fallback={null}>
          <Logo />
          {/* <Links /> */}
          <Sun />
          <Peeks smooth={9}/>
          <Peeks2 />
          <Plane />
          <SceneCamera />
          <Effect />
        </Suspense>
      </ForwardCanvas>
    </MainWrapper>
  );
}

export default Header3D;
