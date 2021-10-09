import React from 'react'
import { ChartHeader } from '@/components/ChartHeader/ChartHeader'
import { ChartContainer, ChartsContainer, Container } from './AreaChartScreen.styled'
import { ChartsTitles } from '@/components/ChartHeader/types'
import { AreaChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import { data } from '@/data/data'
import { Dots, Gradient, Line } from '@/screens/AreaChartScreen/chartAdds'
import { MultipleAreaCharts } from '@/screens/AreaChartScreen/MultipleAreaCharts/MultipleAreaCharts'
import { StyleSheet } from 'react-native'
import { StackedAreaChartComponent } from '@/screens/AreaChartScreen/StackedAreaChartComponent/StackedAreaChartComponent'

export const AreaChartScreen = () => {
  return (
    <Container>
      <ChartHeader title={ChartsTitles.AREA_CHART} />
      <ChartsContainer>
        {/*first chart, with sharp angles and border line*/}
        <ChartContainer>
          <AreaChart style={{ height: 200 }} data={data} svg={{ fill: '#ADD8E6' }} />
        </ChartContainer>
        {/*second chart, with sharp angles, border line and circle decorators*/}
        <ChartContainer>
          <AreaChart
            style={{ height: 200 }}
            data={data}
            gridMin={-100}
            gridMax={120}
            contentInset={{ top: 30, bottom: 30 }}
            svg={{ fill: '#ADD8E6' }}>
            <Grid />
            <Line />
            <Dots />
          </AreaChart>
        </ChartContainer>
        <ChartContainer>
          <AreaChart
            style={{ height: 200 }}
            data={data}
            start={120}
            gridMin={-100}
            gridMax={120}
            contentInset={{ top: 30, bottom: 30 }}
            svg={{ fill: '#ADD8E6' }}>
            <Grid />
            <Line />
            <Dots />
          </AreaChart>
        </ChartContainer>
        {/*third chart, with rounded angles and gradient fill, without border line*/}
        <ChartContainer>
          <AreaChart
            style={{ height: 200 }}
            gridMin={-100}
            gridMax={120}
            data={data}
            contentInset={{ top: 30, bottom: 30 }}
            curve={shape.curveNatural}
            svg={{ fill: 'url(#gradient)' }}>
            <Grid />
            <Gradient />
          </AreaChart>
        </ChartContainer>
        {/*fourth chart, with rounded angles, without grid*/}
        <ChartContainer>
          <AreaChart
            style={{ height: 200 }}
            gridMin={-100}
            gridMax={120}
            data={data}
            contentInset={{ top: 30, bottom: 30 }}
            curve={shape.curveNatural}
            svg={{ fill: 'rgba(234, 65, 144, 0.8)' }}
          />
        </ChartContainer>
        {/*fifth chart, with curve shape 'step' type and border line*/}
        <ChartContainer>
          <AreaChart
            style={{ height: 200 }}
            gridMin={-100}
            gridMax={120}
            data={data}
            contentInset={{ top: 30, bottom: 30 }}
            curve={shape.curveStep}
            svg={{ fill: 'rgba(134, 65, 244, 0.5)' }}>
            <Grid />
            <Line />
          </AreaChart>
        </ChartContainer>
        {/*sixth chart, with two interpenetrating area charts */}
        <ChartContainer>
          <AreaChart
            style={{ height: 200 }}
            gridMin={-100}
            gridMax={120}
            data={data}
            contentInset={{ top: 30, bottom: 30 }}
            curve={shape.curveNatural}
            svg={{ fill: 'rgb(124,252,0)' }}
          />
          <AreaChart
            style={StyleSheet.absoluteFill}
            gridMin={-100}
            gridMax={120}
            data={[...data].reverse()}
            contentInset={{ top: 30, bottom: 30 }}
            curve={shape.curveNatural}
            svg={{ fill: 'rgb(176,224,230, 0.8)' }}>
            <Grid />
          </AreaChart>
        </ChartContainer>
        {/*anti-pattern. Chart is no longer legible */}
        <ChartContainer>
          <MultipleAreaCharts />
        </ChartContainer>
        {/*Stacked area chart */}
        <ChartContainer>
          <StackedAreaChartComponent />
        </ChartContainer>
      </ChartsContainer>
    </Container>
  )
}
