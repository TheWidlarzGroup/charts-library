import React from 'react'
import { ChartHeader } from '@/components/ChartHeader/ChartHeader'
import { Container } from '@/screens/AreaChart/AreaChart.styled'
import { ChartsTitles } from '@/components/ChartHeader/types'

export const AreaChart = () => {
  return (
    <Container>
      <ChartHeader title={ChartsTitles.AREA_CHART} />
    </Container>
  )
}
