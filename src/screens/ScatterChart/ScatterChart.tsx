import React from 'react'
import { Container, ChartsContainer, ChartContainer, CustomChart } from './ScatterChart.styled'
import { ChartsTitles } from '@/components/ChartHeader/types'
import { ChartHeader } from '@/components/ChartHeader/ChartHeader'
import { CustomGrid } from '@/screens/ScatterChart/chartsAdds'
import { XAxis, YAxis } from 'react-native-svg-charts'
import { SafeAreaView } from 'react-native'
import { CirclesSvg } from '@/screens/ScatterChart/CIrclesSvgComponents/CirclesSvg'
import { generateData } from '@/screens/ScatterChart/utilityFunctions'

export const ScatterChart = () => {
  const xData = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
  const yData = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
  const axisSvg = {
    fill: 'grey',
    fontSize: 11,
  }

  const dotsData = generateData(100)

  return (
    <Container>
      <ChartHeader title={ChartsTitles.SCATTER_CHART} />
      <ChartsContainer>
        <SafeAreaView style={{ flexDirection: 'row', flex: 1, backgroundColor: 'transparent' }}>
          <YAxis
            style={{ height: 300 - 10, marginTop: 30, backgroundColor: 'transparent' }}
            data={yData}
            formatLabel={(value) => `${value}`}
            contentInset={{ top: 10, bottom: 10 }}
            svg={axisSvg}
            min={0}
            max={100}
            numberOfTicks={10}
          />
          <ChartContainer>
            <CustomChart>
              <CustomGrid xData={xData} yData={yData} />
              <CirclesSvg data={dotsData} componentWidth={330} componentHeight={270} />
            </CustomChart>
            <XAxis
              style={{
                marginLeft: -10,
                marginTop: 12,
                width: 350,
                height: 10,
                backgroundColor: 'transparent',
              }}
              data={xData}
              formatLabel={(value) => `${value * 10}`}
              contentInset={{ left: 10, right: 10 }}
              svg={axisSvg}
            />
          </ChartContainer>
        </SafeAreaView>
      </ChartsContainer>
    </Container>
  )
}
