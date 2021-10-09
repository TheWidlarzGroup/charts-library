import React, { VFC } from 'react'
import { Container } from './LineChartWithAverage.styled'
import { Grid, LineChart } from 'react-native-svg-charts'
import { data2 } from '@/data/data'
import * as shape from 'd3-shape'
import { CustomGrid, Gradient, Shadow, VerticalGrid } from '@/screens/LineChartComponent/chartAdds'
import { composeDataWithAverageValue, createAverageValuesArray } from '../utilityFunctions'

interface Props {
  horizontalGrid?: boolean
  verticalGrid?: boolean
  fullGrid?: boolean
}

export const LineChartWithAverage: VFC<Props> = ({ horizontalGrid, verticalGrid, fullGrid }) => {
  const averageValuesArray = createAverageValuesArray(data2)
  const dataWithAverageValue = composeDataWithAverageValue(data2, averageValuesArray)

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
            stroke: 'url(#gradient)',
          }}
          contentInset={{ top: 20, bottom: 20 }}>
          <Shadow />
          {horizontalGrid && <Grid />}
          {fullGrid && <CustomGrid belowChart={true} combinedData={dataWithAverageValue} />}
          {verticalGrid && <VerticalGrid combinedData={dataWithAverageValue} />}
          <Gradient />
        </LineChart>
      </Container>
    </>
  )
}
