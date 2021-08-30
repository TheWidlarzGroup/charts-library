import React from 'react'
import { ChartHeader } from '@/components/ChartHeader/ChartHeader'
import { Container } from '@/screens/BarChart/BarChart.styled'
import { ChartsTitles } from '@/components/ChartHeader/types'

export const BarChart = () => {
  return (
    <Container>
      <ChartHeader title={ChartsTitles.BAR_CHART} />
    </Container>
  )
}
