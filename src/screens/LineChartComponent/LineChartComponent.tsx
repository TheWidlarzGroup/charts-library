import React from 'react'
import { ChartHeader } from '@/components/ChartHeader/ChartHeader'
import { Container, ChartsContainer, ChartContainer } from './LineChartComponent.styled'
import { ChartsTitles } from '@/components/ChartHeader/types'
import { Grid, LineChart } from 'react-native-svg-charts'
import { data2 } from '@/data/data'
import { Clips, Gradient, Shadow, DashedLine, DashedLineSteps } from './chartAdds'
import * as shape from 'd3-shape'
import { LineChartWithAverage } from './LineChartWithAverage/LineChartWithAverage'
import { MultipleLinesChart } from './MultipleLinesChart/MultipleLinesChart'
import { MultipleLineChartWithAverage } from '@/screens/LineChartComponent/MultipleLineChartWithAverage/MultipleLineChartWithAverage'

export const LineChartComponent = () => {
  const indexToClipFrom = 4

  return (
    <Container>
      <ChartHeader title={ChartsTitles.LINE_CHART} />
      <ChartsContainer>
        <ChartContainer>
          <LineChart
            style={{ height: 200 }}
            gridMin={-20}
            gridMax={120}
            data={data2}
            svg={{ stroke: 'rgb(134, 65, 244)' }}
            contentInset={{ top: 20, bottom: 20 }}>
            <Grid />
          </LineChart>
        </ChartContainer>
        <ChartContainer>
          <LineChart
            style={{ height: 200 }}
            gridMin={-20}
            gridMax={120}
            data={data2}
            svg={{ stroke: 'rgb(134, 65, 244)' }}
            contentInset={{ top: 20, bottom: 20 }}>
            <Shadow />
          </LineChart>
        </ChartContainer>
        <ChartContainer>
          <LineChart
            style={{ height: 200 }}
            gridMin={-20}
            gridMax={120}
            data={data2}
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
        </ChartContainer>
        <ChartContainer>
          <LineChart
            style={{ height: 200 }}
            gridMin={-20}
            gridMax={120}
            data={data2}
            curve={shape.curveStep}
            svg={{
              strokeWidth: 2,
              stroke: 'url(#gradient)',
            }}
            contentInset={{ top: 20, bottom: 20 }}>
            <Shadow />
            <Grid />
            <Gradient />
          </LineChart>
        </ChartContainer>
        <ChartContainer>
          <LineChart
            style={{ height: 200 }}
            gridMin={-20}
            gridMax={120}
            data={data2}
            contentInset={{ top: 20, bottom: 20 }}
            svg={{
              stroke: 'url(#gradient)',
              strokeWidth: 2,
              clipPath: 'url(#clip-path-1)',
            }}>
            <Shadow />
            <Gradient />
            <Grid />
            <Clips indexToClipFrom={indexToClipFrom} />
          </LineChart>
        </ChartContainer>
        <ChartContainer>
          <LineChart
            style={{ height: 200 }}
            gridMin={-20}
            gridMax={120}
            data={data2}
            contentInset={{ top: 20, bottom: 20 }}
            svg={{
              stroke: 'rgb(134, 65, 244)',
              strokeWidth: 2,
              clipPath: 'url(#clip-path-1)',
            }}>
            <Shadow />
            <Grid />
            <Clips indexToClipFrom={indexToClipFrom} />
            <DashedLine />
          </LineChart>
        </ChartContainer>
        <ChartContainer>
          <LineChart
            style={{ height: 200 }}
            gridMin={-20}
            gridMax={120}
            data={data2}
            contentInset={{ top: 20, bottom: 20 }}
            curve={shape.curveStep}
            svg={{
              stroke: 'url(#gradient)',
              strokeWidth: 2,
              clipPath: 'url(#clip-path-1)',
            }}>
            <Gradient />
            <Shadow />
            <Grid />
            <Clips indexToClipFrom={indexToClipFrom} />
            <DashedLineSteps />
          </LineChart>
        </ChartContainer>
        <ChartContainer>
          <MultipleLinesChart />
        </ChartContainer>
        <ChartContainer>
          <LineChartWithAverage />
        </ChartContainer>
        <ChartContainer>
          <MultipleLineChartWithAverage />
        </ChartContainer>
      </ChartsContainer>
    </Container>
  )
}
