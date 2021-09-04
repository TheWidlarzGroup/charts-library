import React from 'react'
import { Container, ChartsContainer } from './ScatterChart.styled'
import { ChartsTitles } from '@/components/ChartHeader/types'
import { ChartHeader } from '@/components/ChartHeader/ChartHeader'
import { ScatterChartExample } from '@/screens/ScatterChart/CIrclesSvgComponents/ScatterChartExample'
import { generateData } from '@/screens/ScatterChart/utilityFunctions'
import { FootballPitch } from '@/screens/ScatterChart/FootballPitch/FootballPitch'

export const ScatterChart = () => {
  const scatterChartData = generateData(300)

  return (
    <Container>
      <ChartHeader title={ChartsTitles.SCATTER_CHART} />
      <ChartsContainer>
        <ScatterChartExample data={scatterChartData} />
        <FootballPitch />
      </ChartsContainer>
    </Container>
  )
}
