import React from 'react'
import { Container } from './StackedBarChartComponent.styled'
import { StackedBarChart } from 'react-native-svg-charts'
import { stackedBarChartData } from '@/data/data'

export const StackedBarChartComponent = () => {
  const colors = ['#142459', '#176BA0', '#19AADE', '#1AC9E6']
  const keys: ('apples' | 'bananas' | 'cherries' | 'dates')[] = [
    'apples',
    'bananas',
    'cherries',
    'dates',
  ]

  return (
    <Container>
      <StackedBarChart
        style={{ height: 200, paddingVertical: 16 }}
        data={stackedBarChartData}
        keys={keys}
        colors={colors}
        showGrid={false}
        contentInset={{ top: 30, bottom: 30 }}
      />
    </Container>
  )
}
