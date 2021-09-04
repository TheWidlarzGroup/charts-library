import Svg, { G, Line } from 'react-native-svg'
import React from 'react'

const min = 1
const max = 10000000

const uniqueKey = (index: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min + index
}

interface GridProps {
  xData: number[]
  yData: number[]
}

export const CustomGrid = (props: Partial<GridProps>) => {
  const { xData, yData } = props as GridProps

  return (
    <Svg style={{ position: 'absolute', zIndex: 0 }}>
      <G>
        {xData.map((item, index) => (
          <Line
            key={uniqueKey(index)}
            y1={'0%'}
            y2={'100%'}
            x1={index * 33}
            x2={index * 33}
            stroke={'rgba(0,0,0,0.2)'}
          />
        ))}
        {yData.map((item, index) => (
          <Line
            key={uniqueKey(index)}
            x1={'0%'}
            x2={'100%'}
            y1={index * 27}
            y2={index * 27}
            stroke={'rgba(0,0,0,0.2)'}
          />
        ))}
      </G>
    </Svg>
  )
}
