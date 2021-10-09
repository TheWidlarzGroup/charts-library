import React from 'react'
import { Container } from './StackedAreaChartComponent.styled'
import { StackedAreaChart } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import { stackedAreaChartData } from '@/data/data'

type Keys = ('apples' | 'pears' | 'cherries' | 'plums')[]

export const StackedAreaChartComponent = () => {
  const colors = ['#142459', '#176BA0', '#19AADE', '#1AC9E6']
  const keys: Keys = ['apples', 'pears', 'cherries', 'plums']

  return (
    <Container>
      <StackedAreaChart
        style={{ height: 150, paddingVertical: 16 }}
        data={stackedAreaChartData}
        keys={keys}
        colors={colors}
        curve={shape.curveNatural}
      />
    </Container>
  )
}
