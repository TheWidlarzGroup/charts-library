import React from 'react'
import { ChartHeader } from '@/components/ChartHeader/ChartHeader'
import { ChartContainer, ChartsContainer, Container } from './AreaChartScreen.styled'
import { ChartsTitles } from '@/components/ChartHeader/types'
import { AreaChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import { data, data4 } from '@/screens/AreaChartScreen/data'
import { Decorator, Gradient, Line } from '@/screens/AreaChartScreen/chartAdds'
import { MultipleAreaCharts } from '@/screens/AreaChartScreen/MultipleAreaCharts/MultipleAreaCharts'
import { StyleSheet } from 'react-native'
import { StackedAreaChartComponent } from '@/screens/AreaChartScreen/StackedAreaChartComponent/StackedAreaChartComponent'

export const AreaChartScreen = () => {
  return (
    <Container>
      <ChartHeader title={ChartsTitles.AREA_CHART} />
      <ChartsContainer>
        <ChartContainer>
          <AreaChart
            style={{ height: 200 }}
            data={data}
            gridMin={-80}
            gridMax={120}
            contentInset={{ top: 30, bottom: 30 }}
            svg={{ fill: 'rgba(94, 160, 113, 0.8)' }}>
            <Line />
            <Grid />
          </AreaChart>
        </ChartContainer>

        <ChartContainer>
          <AreaChart
            yAccessor={({ item }) => item}
            xAccessor={({ index }) => index}
            style={{ height: 200 }}
            data={data4}
            gridMin={-80}
            gridMax={120}
            contentInset={{ top: 30, bottom: 30 }}
            svg={{ fill: 'rgba(255, 204, 0, 0.8)' }}>
            <Line />
            <Decorator />
            <Grid />
          </AreaChart>
        </ChartContainer>

        <ChartContainer>
          <AreaChart
            style={{ height: 200 }}
            gridMax={120}
            data={data}
            contentInset={{ top: 30, bottom: 30 }}
            curve={shape.curveNatural}
            svg={{ fill: 'url(#gradient)' }}>
            <Grid />
            <Gradient />
          </AreaChart>
        </ChartContainer>

        <ChartContainer>
          <AreaChart
            style={{ height: 200 }}
            gridMax={120}
            data={data}
            contentInset={{ top: 30, bottom: 30 }}
            curve={shape.curveNatural}
            svg={{ fill: 'rgba(234, 65, 144, 0.8)' }}
          />
        </ChartContainer>

        <ChartContainer>
          <AreaChart
            style={{ height: 200 }}
            gridMax={120}
            data={data}
            contentInset={{ top: 30, bottom: 30 }}
            curve={shape.curveStep}
            svg={{ fill: 'rgba(144, 165, 184, 0.8)' }}>
            <Grid />
            <Line />
          </AreaChart>
        </ChartContainer>

        <ChartContainer>
          <AreaChart
            style={{ height: 200 }}
            gridMax={120}
            data={data}
            contentInset={{ top: 30, bottom: 30 }}
            curve={shape.curveNatural}
            svg={{ fill: 'rgb(124,252,0)' }}
          />
          <AreaChart
            style={StyleSheet.absoluteFill}
            gridMax={120}
            data={[...data].reverse()}
            contentInset={{ top: 30, bottom: 30 }}
            curve={shape.curveNatural}
            svg={{ fill: 'rgb(176,224,230, 0.8)' }}>
            <Grid />
          </AreaChart>
        </ChartContainer>

        <ChartContainer>
          <MultipleAreaCharts />
        </ChartContainer>

        <ChartContainer>
          <StackedAreaChartComponent />
        </ChartContainer>
      </ChartsContainer>
    </Container>
  )
}
