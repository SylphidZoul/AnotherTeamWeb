import React from 'react'
import { LoadingWrapper, H2 } from './styles'
import { Html } from 'drei'
import { useSpring } from 'react-spring'

export const NowLoading = () => {
  const color = useSpring({
    from: {
      color: '#df0a6d',
      textShadow:`0 0 20px #ee04b4,
                  0 0 40px #ee04b4,
                  0 0 80px #ee04b4`
    },
    to: async (next) => {
      while (1) {
        await next({ 
          color: '#0c14ff',
          textShadow:`0 0 20px #0c14ff,
                      0 0 40px #0c14ff,
                      0 0 80px #0c14ff`
        })
        await next({
          color: '#ee04b4',
          textShadow:`0 0 10px #ee04b4,
                      0 0 20px #ee04b4,
                      0 0 40px #ee04b4`
        })
      }
    }, config: { duration: 5000 }
  })

  return (
    <Html center>
      <LoadingWrapper>
        <H2 style={color}>
          Now Loading
        </H2>
      </LoadingWrapper>
    </Html>
  )
}

