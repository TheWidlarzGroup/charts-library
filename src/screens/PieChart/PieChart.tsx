import React from 'react'
import { ChartHeader } from '@/components/ChartHeader/ChartHeader'
import { Container } from '@/screens/PieChart/PieChart.styled'
import { ChartsTitles } from '@/components/ChartHeader/types'

export const PieChart = () => {
  return (
    <Container>
      <ChartHeader title={ChartsTitles.PIE_CHART} />
    </Container>
  )
}
