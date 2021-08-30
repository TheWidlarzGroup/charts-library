import React from 'react'
import { ChartHeader } from '@/components/ChartHeader/ChartHeader'
import { Container } from '@/screens/ProgressCircle/ProgressCircle.styled'
import { ChartsTitles } from '@/components/ChartHeader/types'

export const ProgressCircle = () => {
  return (
    <Container>
      <ChartHeader title={ChartsTitles.PROGRESS_CIRCLE} />
    </Container>
  )
}
