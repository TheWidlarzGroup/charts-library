import React from 'react'
import { Container } from './MultipleLineChartWithAverage.styled'
import { Grid, LineChart } from 'react-native-svg-charts'
import { data11, data10, data9 } from '@/data/data'
import { Gradient, Shadow } from '@/screens/LineChartComponent/chartAdds'
import { composeMultiDataWithAverageValue, createAverageValuesArray } from '../utilityFunctions'

export const MultipleLineChartWithAverage = () => {
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
