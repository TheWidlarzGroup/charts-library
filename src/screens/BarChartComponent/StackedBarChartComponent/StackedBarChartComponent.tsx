import React from 'react'
import { Container } from './StackedBarChartComponent.styled'
import { StackedBarChart } from 'react-native-svg-charts'
import { stackedBarChartData } from '@/data/data'

export const StackedBarChartComponent = () => {
  const colors = ['#8800cc', '#FF0000', '#0000FF', '#00FF00']
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
