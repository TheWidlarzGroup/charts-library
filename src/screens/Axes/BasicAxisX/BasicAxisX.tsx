import React from 'react'
import { data2 } from '@/data/data'
import { ChartContainer } from './BasicAxisX.styled'
import { XAxis } from 'react-native-svg-charts'
import { LineChartWithAverage } from '@/screens/LineChartComponent/LineChartWithAverage/LineChartWithAverage'

export const BasicAxisX = () => {
  return (
    <ChartContainer>
      <LineChartWithAverage />
      <XAxis
        style={{ marginHorizontal: -10 }}
        data={data2}
        formatLabel={(value, index) => index}
        contentInset={{ left: 10, right: 10 }}
        svg={{ fontSize: 10, fill: 'black' }}
      />
    </ChartContainer>
  )
}
