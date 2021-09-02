import React from 'react'
import { data2 } from '@/data/data'
import { ChartContainer } from './AxisYWithLine.styled'
import { YAxis } from 'react-native-svg-charts'
import { Arrow, AxisYLine } from '@/screens/Axes/AxisYWithLine/AxisYWithLine.styled'
import { LineChartWithAverage } from '@/screens/LineChartComponent/LineChartWithAverage/LineChartWithAverage'

export const AxisYWithLine = () => {
  return (
    <>
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
          numberOfTicks={5}
          formatLabel={(value) => `${value} km`}
        />
        <AxisYLine />
        <Arrow />
        <LineChartWithAverage horizontalGrid />
      </ChartContainer>
    </>
  )
}
