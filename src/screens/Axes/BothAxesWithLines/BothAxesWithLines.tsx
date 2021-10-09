import { XAxis, YAxis } from 'react-native-svg-charts'
import { data2 } from '@/data/data'
import { LineChartWithAverage } from '@/screens/LineChartComponent/LineChartWithAverage/LineChartWithAverage'
import React, { useState } from 'react'
import {
  ChartContainer,
  HorizontalArrow,
  VerticalArrow,
  AxisXLine,
  AxisYLine,
} from './BothAxesWithLines.styled'
import { SafeAreaView } from 'react-native'

export const BothAxesWithLines = () => {
  const [componentWidth, setComponentWidth] = useState(0)

  return (
    <SafeAreaView
      style={{ flexDirection: 'row', flex: 1, marginBottom: 20 }}
      onLayout={(event) => {
        const { width } = event.nativeEvent.layout
        setComponentWidth(width)
      }}>
      <YAxis
        data={data2}
        contentInset={{ top: 20, bottom: 20 }}
        min={-50}
        max={150}
        svg={{
          fill: 'grey',
          fontSize: 11,
        }}
        style={{ marginRight: 5, height: 300 }}
        numberOfTicks={10}
        formatLabel={(value) => `${value} km`}
      />
      <ChartContainer>
        <LineChartWithAverage />
        <XAxis
          style={{ marginHorizontal: -10, width: componentWidth, marginTop: 10 }}
          data={data2}
          formatLabel={(value, index) => index}
          contentInset={{ left: 10, right: 10 }}
          svg={{ fontSize: 10, fill: 'black' }}
        />
        <AxisXLine width={componentWidth} />
        <AxisYLine />
        <HorizontalArrow />
        <VerticalArrow />
      </ChartContainer>
    </SafeAreaView>
  )
}
