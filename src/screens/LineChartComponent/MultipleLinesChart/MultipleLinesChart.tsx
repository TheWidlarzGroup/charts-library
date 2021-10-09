import React from 'react'
import { Container } from './MultipleLinesChart.styled'
import { Grid, LineChart } from 'react-native-svg-charts'
import { doubleLineChart, quadrupleLineChart } from '@/data/data'
import {
  Gradient,
  MultipleLinesChartDecorator,
  Shadow,
} from '@/screens/LineChartComponent/chartAdds'
import * as shape from 'd3-shape'

export const MultipleLinesChart = () => {
  return (
    <>
      <Container>
        <LineChart
          style={{ height: 300 }}
          gridMin={-50}
          gridMax={150}
          data={doubleLineChart}
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
          gridMin={-50}
          gridMax={150}
          data={quadrupleLineChart}
          curve={shape.curveNatural}
          svg={{
            strokeWidth: 2,
            stroke: 'url(#gradient)',
          }}
          contentInset={{ top: 20, bottom: 20 }}>
          <Shadow />
          <Gradient />
        </LineChart>
      </Container>
      <Container>
        <LineChart
          style={{ height: 300 }}
          gridMin={-20}
          gridMax={120}
          data={quadrupleLineChart}
          contentInset={{ top: 20, bottom: 20 }}>
          <Grid />
          <MultipleLinesChartDecorator combinedData={quadrupleLineChart} />
        </LineChart>
      </Container>
    </>
  )
}
