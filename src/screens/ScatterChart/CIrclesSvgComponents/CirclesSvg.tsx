import React, { VFC } from 'react'
import Svg from 'react-native-svg'
import { renderCirclesSvg } from '@/screens/ScatterChart/utilityFunctions'

interface Props {
  data: {
    x: number
    y: number
  }[]
  componentWidth: number
  componentHeight: number
}

export const CirclesSvg: VFC<Props> = ({ data, componentHeight, componentWidth }) => {
  const yProportion = componentHeight / 100
  const xProportion = componentWidth / 100
  return (
    <Svg
      key="svg"
      height={componentHeight + yProportion ** 2}
      width={componentWidth + xProportion ** 2}
      style={{ position: 'absolute', left: -componentWidth / 100, top: -componentHeight / 100 }}>
      {renderCirclesSvg(data, componentWidth, componentHeight)}
    </Svg>
  )
}
