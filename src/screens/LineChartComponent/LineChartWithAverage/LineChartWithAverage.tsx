import React from 'react'
import { Container } from './LineChartWithAverage.styled'
import { Grid, LineChart } from 'react-native-svg-charts'
import { data2, data11, data10, data9 } from '@/data/data'
import * as shape from 'd3-shape'
import { Gradient, Shadow } from '@/screens/LineChartComponent/chartAdds'
import {
  composeDataWithAverageValue,
  composeMultiDataWithAverageValue,
  createAverageValuesArray,
} from '../utilityFunctions'

export const LineChartWithAverage = () => {
  const averageValuesArray = createAverageValuesArray(data2)
  const dataWithAverageValue = composeDataWithAverageValue(data2, averageValuesArray)

  const averageValuesArrayData9 = createAverageValuesArray(data9)
  const averageValuesArrayData10 = createAverageValuesArray(data10)
  const averageValuesArrayData11 = createAverageValuesArray(data11)
  const combinedDataWithAverageValues = composeMultiDataWithAverageValue(
    data9,
    averageValuesArrayData9,
    data10,
    averageValuesArrayData10,
    data11,
    averageValuesArrayData11
  )

  return (
    <>
      <Container>
        <LineChart
          style={{ height: 300 }}
          gridMin={-50}
          gridMax={150}
          data={dataWithAverageValue}
          curve={shape.curveNatural}
          svg={{
            strokeWidth: 2,
            stroke: 'url(#gradient)',
          }}
          contentInset={{ top: 20, bottom: 20 }}>
          <Shadow />
          <Grid />
          <Gradient />
        </LineChart>
      </Container>
      <Container>
        <LineChart
          style={{ height: 300 }}
          gridMin={-10}
          gridMax={100}
          data={combinedDataWithAverageValues}
          svg={{
            strokeWidth: 2,
            stroke: 'url(#gradient)',
          }}
          contentInset={{ top: 20, bottom: 20 }}>
          <Shadow />
          <Grid />
          <Gradient />
        </LineChart>
      </Container>
    </>
  )
}
