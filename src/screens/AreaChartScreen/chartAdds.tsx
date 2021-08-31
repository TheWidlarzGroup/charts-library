import { Circle, Defs, LinearGradient, Path, Stop } from 'react-native-svg'
import React from 'react'

interface LineProps {
  line: string
}

export const Line = (props: Partial<LineProps>) => {
  const { line } = props as LineProps
  return <Path key={'line'} d={line} stroke={'rgb(0, 0, 0)'} fill={'none'} />
}

interface DecoratorProps {
  x: any
  y: any
  data: number[]
}

export const Decorator = (props: Partial<DecoratorProps>) => {
  const { x, y, data } = props as DecoratorProps
  return (
    <>
      {data?.map((value, index) => (
        <Circle
          key={index}
          cx={x(index)}
          cy={y(value)}
          r={4}
          stroke={'rgb(0, 0, 0)'}
          fill={'white'}
        />
      ))}
    </>
  )
}

export const Gradient = () => (
  <Defs>
    <LinearGradient id={'gradient'} x1={'0%'} y1={'0%'} x2={'0%'} y2={'100%'}>
      <Stop offset={'0%'} stopColor={'rgb(194, 65, 244)'} stopOpacity={0.8} />
      <Stop offset={'100%'} stopColor={'rgb(134, 65, 244)'} stopOpacity={0.2} />
    </LinearGradient>
  </Defs>
)
