import React from 'react'
import { Container } from './StackedAreaChartComponent.styled'
import { StackedAreaChart } from 'react-native-svg-charts'
import * as shape from 'd3-shape'

export const StackedAreaChartComponent = () => {
  const data = [
    {
      apples: 1840,
      bananas: 1920,
      cherries: 960,
      dates: 400,
    },
    {
      apples: 1600,
      bananas: 1440,
      cherries: 960,
      dates: 400,
    },
    {
      apples: 640,
      bananas: 960,
      cherries: 1640,
      dates: 400,
    },
    {
      apples: 3320,
      bananas: 480,
      cherries: 640,
      dates: 400,
    },
  ]

  const colors = ['#8800cc', '#FF0000', '#0000FF', '#00FF00']
  const keys: ('apples' | 'bananas' | 'cherries' | 'dates')[] = [
    'apples',
    'bananas',
    'cherries',
    'dates',
  ]

  return (
    <Container>
      <StackedAreaChart
        style={{ height: 200, paddingVertical: 16 }}
        data={data}
        keys={keys}
        colors={colors}
        curve={shape.curveNatural}
        showGrid={false}
      />
    </Container>
  )
}
