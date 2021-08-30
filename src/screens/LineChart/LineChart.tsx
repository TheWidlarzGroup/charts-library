import React from 'react'
import { ChartHeader } from '@/components/ChartHeader/ChartHeader'
import { Container } from '@/screens/LineChart/LineChart.styled'
import { ChartsTitles } from '@/components/ChartHeader/types'

export const LineChart = () => {
  return (
    <Container>
      <ChartHeader title={ChartsTitles.LINE_CHART} />
    </Container>
  )
}
