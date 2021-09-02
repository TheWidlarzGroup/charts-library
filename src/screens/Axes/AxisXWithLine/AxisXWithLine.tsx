import React, { useState } from 'react'
import { data2 } from '@/data/data'
import { Arrow, AxisXLine, ChartContainer } from './AxisXWithLine.styled'
import { XAxis } from 'react-native-svg-charts'
import { LineChartWithAverage } from '@/screens/LineChartComponent/LineChartWithAverage/LineChartWithAverage'

export const AxisXWithLine = () => {
  const [componentWidth, setComponentWidth] = useState(0)

  return (
    <ChartContainer
      onLayout={(event) => {
        const { width } = event.nativeEvent.layout
        setComponentWidth(width)
      }}>
      <LineChartWithAverage verticalGrid />
      <XAxis
        style={{ marginHorizontal: -10, marginTop: 10 }}
        data={data2}
        formatLabel={(value, index) => {
          if (index % 4 === 0) {
            return index
          }
          return ''
        }}
        contentInset={{ left: 10, right: 10 }}
        svg={{ fontSize: 10, fill: 'black' }}
      />
      <AxisXLine width={componentWidth} />
      <Arrow />
    </ChartContainer>
  )
}
