import React from 'react'
import { ChartHeader } from '@/components/ChartHeader/ChartHeader'
import {
  ChartContainer,
  ChartsContainer,
  Container,
} from '@/screens/BarChartComponent/BarChartComponent.styled'
import { ChartsTitles } from '@/components/ChartHeader/types'
import { data, data5, data6, data7, data8 } from '@/data/data'
import { BarChart, Grid } from 'react-native-svg-charts'
import { Gradient } from '@/screens/AreaChartScreen/chartAdds'
import {
  transformDataForBarChart,
  transformDataForBarChart2,
} from '@/screens/BarChartComponent/barChartFunctions'
import { StackedBarChartComponent } from '@/screens/BarChartComponent/StackedBarChartComponent/StackedBarChartComponent'

export const BarChartComponent = () => {
  const dataWithPickedColors = data5.map((item) => transformDataForBarChart(item))
  const dataWithPickedColors2 = data.map((item, index) => transformDataForBarChart2(item, index))

  return (
    <Container>
      <ChartHeader title={ChartsTitles.BAR_CHART} />
      <ChartsContainer>
        <ChartContainer>
          <BarChart
            style={{ height: 200 }}
            gridMin={-100}
            gridMax={120}
            data={data}
            svg={{ fill: 'rgb(134, 65, 244)' }}
            contentInset={{ top: 30, bottom: 30 }}>
            <Grid />
          </BarChart>
        </ChartContainer>
        <ChartContainer>
          <BarChart
            style={{ height: 200 }}
            spacingInner={0.4}
            spacingOuter={0.1}
            gridMin={-100}
            gridMax={120}
            data={data}
            svg={{ fill: 'url(#gradient)' }}
            contentInset={{ top: 30, bottom: 30 }}>
            <Grid />
            <Gradient />
          </BarChart>
        </ChartContainer>
        <ChartContainer>
          <BarChart
            style={{ height: 200 }}
            spacingInner={0.1}
            gridMin={-10}
            gridMax={120}
            data={data6}
            yAccessor={({ item }) => item.value}
            contentInset={{ top: 30, bottom: 30 }}
          />
        </ChartContainer>
        <ChartContainer>
          <BarChart
            style={{ height: 250 }}
            spacingInner={0.1}
            gridMin={-10}
            gridMax={120}
            data={data7}
            yAccessor={({ item }) => item.value}
            contentInset={{ top: 30, bottom: 30 }}
          />
        </ChartContainer>
        <ChartContainer>
          <BarChart
            style={{ height: 250 }}
            spacingInner={0.1}
            gridMin={-10}
            gridMax={120}
            data={dataWithPickedColors}
            yAccessor={({ item }) => item.value}
            contentInset={{ top: 30, bottom: 30 }}
          />
        </ChartContainer>
        <ChartContainer>
          <BarChart
            style={{ height: 250 }}
            spacingInner={0.1}
            gridMin={-10}
            gridMax={120}
            data={dataWithPickedColors2}
            yAccessor={({ item }) => item.value}
            contentInset={{ top: 30, bottom: 30 }}>
            <Grid />
          </BarChart>
        </ChartContainer>
        <ChartContainer>
          <BarChart
            style={{ height: 200, marginVertical: 20 }}
            horizontal={true}
            spacingInner={0.1}
            gridMin={0}
            gridMax={100}
            data={data8}
            svg={{ fill: 'lightblue' }}
            contentInset={{ top: 30, bottom: 30 }}>
            <Grid direction={Grid.Direction.VERTICAL} />
          </BarChart>
        </ChartContainer>
        <ChartContainer>
          <StackedBarChartComponent />
        </ChartContainer>
      </ChartsContainer>
    </Container>
  )
}
