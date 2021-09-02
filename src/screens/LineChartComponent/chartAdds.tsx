import React from 'react'
import Svg, {
  Defs,
  Path,
  LinearGradient,
  Stop,
  ClipPath,
  Rect,
  Circle,
  Line,
  G,
} from 'react-native-svg'

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

const min = 1
const max = 10000000

const uniqueKey = (index: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min + index
}

export const MultipleLinesChartDecorator = (props: Partial<DecoratorProps>) => {
  const { x, y, combinedData } = props as DecoratorProps

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

interface GridProps {
  x: any
  y: any
  combinedData: {
    data: number[]
    svg: { strokeWidth: number; strokeDasharray?: number[] }
  }[]
  ticks: number[]
  belowChart: boolean
}

export const CustomGrid = (props: Partial<GridProps>) => {
  const { x, y, combinedData, ticks } = props as GridProps

  return (
    <G>
      {
        // Horizontal grid
        ticks.map((tick) => (
          <Line
            key={tick}
            x1={'0%'}
            x2={'100%'}
            y1={y(tick)}
            y2={y(tick)}
            stroke={'rgba(0,0,0,0.2)'}
          />
        ))
      }
      {
        // Vertical grid
        combinedData &&
          combinedData[0].data.map((_, index) => (
            <Line
              key={uniqueKey(index)}
              y1={'0%'}
              y2={'100%'}
              x1={x(index)}
              x2={x(index)}
              stroke={'rgba(0,0,0,0.2)'}
            />
          ))
      }
    </G>
  )
}

export const VerticalGrid = (props: Partial<GridProps>) => {
  const { x, combinedData } = props as GridProps

  return (
    <G>
      {combinedData &&
        combinedData[0].data.map((_, index) => (
          <Line
            key={uniqueKey(index)}
            y1={'0%'}
            y2={'100%'}
            x1={x(index)}
            x2={x(index)}
            stroke={'rgba(0,0,0,0.2)'}
          />
        ))}
    </G>
  )
}
