import React from 'react'
import { ChartsContainer, ChartContainer, Container } from '@/screens/Axes/Axes.styled'
import { ChartsTitles } from '@/components/ChartHeader/types'
import { ChartHeader } from '@/components/ChartHeader/ChartHeader'
import { AxisYWithLine } from '@/screens/Axes/AxisYWithLine/AxisYWithLine'
import { BasicAxisY } from '@/screens/Axes/BasicAxisY/BasicAxisY'
import { BasicAxisX } from '@/screens/Axes/BasicAxisX/BasicAxisX'
import { AxisXWithLine } from '@/screens/Axes/AxisXWithLine/AxisXWithLine'
import { BothAxesWithLines } from '@/screens/Axes/BothAxesWithLines/BothAxesWithLines'

export const Axes = () => {
  return (
    <Container>
      <ChartHeader title={ChartsTitles.AXES} />
      <ChartsContainer>
        <BasicAxisY />
        <AxisYWithLine />
        <BasicAxisX />
        <AxisXWithLine />
        <ChartContainer>
          <BothAxesWithLines />
        </ChartContainer>
      </ChartsContainer>
    </Container>
  )
}
