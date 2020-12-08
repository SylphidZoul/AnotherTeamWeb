import { useState, useEffect, useRef } from 'react'
import { useFrame } from 'react-three-fiber'

export const useToggleColor = (reverse) => {
  const [toggle, setToggle] = useState(true)
  const ref = useRef(null)

  useFrame(() => {
    if(!ref.current) return 
    if(reverse) {
      if (!toggle) {
        if (ref.current.material.color.r < 0.015686274) {
          ref.current.material.color.r = 0.01568627450980392
          ref.current.material.color.g = 0.027450980392156862
          ref.current.material.color.b = 0.5882352941176471
        }
        ref.current.material.color.r -= 0.0038344226579521
        ref.current.material.color.g += 0.000152505446623093
        ref.current.material.color.b += 0.0010893246187364
      } else if (toggle) {
        if (ref.current.material.color.r > 0.70588235294) {
          ref.current.material.color.r = 0.7058823529411765
          ref.current.material.color.g = 0
          ref.current.material.color.b = 0.39215686274509803
        }
        ref.current.material.color.r += 0.0038344226579521
        ref.current.material.color.g -= 0.000152505446623093
        ref.current.material.color.b -= 0.0010893246187364
      }
    } else {
      if (toggle) {
        if (ref.current.material.color.r < 0.015686274) {
          ref.current.material.color.r = 0.01568627450980392
          ref.current.material.color.g = 0.027450980392156862
          ref.current.material.color.b = 0.5882352941176471
        }
        ref.current.material.color.r -= 0.0038344226579521
        ref.current.material.color.g += 0.000152505446623093
        ref.current.material.color.b += 0.0010893246187364
      } else if (!toggle) {
        if (ref.current.material.color.r > 0.70588235294) {
          ref.current.material.color.r = 0.7058823529411765
          ref.current.material.color.g = 0
          ref.current.material.color.b = 0.39215686274509803
        }
        ref.current.material.color.r += 0.0038344226579521
        ref.current.material.color.g -= 0.000152505446623093
        ref.current.material.color.b -= 0.0010893246187364
      }
    }
  })

  useEffect(() => {
    const tick = setInterval(() => {
      setToggle(!toggle)
    }, 5500)

    return () => {
      clearInterval(tick)
    }
  })

  return [ref]
}