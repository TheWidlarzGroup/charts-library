import React from 'react'
import Svg, { Defs, Path, LinearGradient, Stop, ClipPath, Rect, Circle } from 'react-native-svg'

interface LineProps {
  line: string
}

export const Shadow = (props: Partial<LineProps>) => {
  const { line } = props as LineProps
  return (
    <Path
      key={'shadow'}
      y={2}
      d={line}
      fill={'none'}
      strokeWidth={4}
      stroke={'rgba(134, 65, 244, 0.2)'}
    />
  )
}

export const Gradient = () => (
  <Defs key={'gradient'}>
    <LinearGradient id={'gradient'} x1={'0'} y1={'0%'} x2={'100%'} y2={'0%'}>
      <Stop offset={'0%'} stopColor={'rgb(134, 65, 244)'} />
      <Stop offset={'100%'} stopColor={'red'} />
    </LinearGradient>
  </Defs>
)

export const DashedLine = (props: Partial<LineProps>) => {
  const { line } = props as LineProps
  return (
    <Path
      key={'line-1'}
      d={line}
      stroke={'rgb(134, 65, 244)'}
      strokeWidth={2}
      fill={'none'}
      strokeDasharray={[4, 4]}
      clipPath={'url(#clip-path-2)'}
    />
  )
}

export const DashedLineSteps = (props: Partial<LineProps>) => {
  const { line } = props as LineProps
  return (
    <Path
      key={'line-1'}
      d={line}
      stroke={'url(#gradient)'}
      strokeWidth={2}
      fill={'none'}
      strokeDasharray={[4, 4]}
      clipPath={'url(#clip-path-2)'}
    />
  )
}

interface ClipProps {
  x: any
  width: number
  indexToClipFrom: number
}

export const Clips = (props: Partial<ClipProps>) => {
  const { x, width, indexToClipFrom } = props
  return (
    <Defs key={'clips'}>
      <ClipPath id="clip-path-1">
        <Rect x={'0'} y={'0'} width={x(indexToClipFrom)} height={'100%'} />
      </ClipPath>
      <ClipPath id={'clip-path-2'}>
        <Rect
          x={x(indexToClipFrom)}
          y={'0'}
          width={width && width - x(indexToClipFrom)}
          height={'100%'}
        />
      </ClipPath>
    </Defs>
  )
}

interface DecoratorProps {
  x: any
  y: any
  combinedData: {
    data: number[]
    svg: {
      stroke: string
      strokeWidth: number
    }
  }[]
}

export const MultipleLinesChartDecorator = (props: Partial<DecoratorProps>) => {
  const { x, y, combinedData } = props as DecoratorProps
  const min = 1
  const max = 10000000
  const uniqueKey = (index: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min + index
  }

  return (
    <>
      {combinedData &&
        combinedData.map((item, index) => {
          return (
            <Svg key={uniqueKey(index)}>
              {item.data.map((value, index) => (
                <Circle
                  key={uniqueKey(index)}
                  cx={x(index)}
                  cy={y(value)}
                  r={2.5}
                  stroke={'rgb(0, 0, 0)'}
                  fill={'white'}
                />
              ))}
            </Svg>
          )
        })}
    </>
  )
}
