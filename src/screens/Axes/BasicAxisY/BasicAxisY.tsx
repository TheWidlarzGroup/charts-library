import React from 'react'
import { data2 } from '@/data/data'
import { ChartContainer } from './BasicAxisY.styled'
import { YAxis } from 'react-native-svg-charts'
import { LineChartWithAverage } from '@/screens/LineChartComponent/LineChartWithAverage/LineChartWithAverage'

export const BasicAxisY = () => {
  return (
    <ChartContainer>
      <YAxis
        data={data2}
        contentInset={{ top: 20, bottom: 20 }}
        min={-50}
        max={150}
        svg={{
          fill: 'grey',
          fontSize: 11,
        }}
        style={{ marginRight: 5 }}
        numberOfTicks={10}
        formatLabel={(value) => `${value} km`}
      />
      <LineChartWithAverage />
    </ChartContainer>
  )
}
