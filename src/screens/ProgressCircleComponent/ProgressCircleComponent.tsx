import React from 'react'
import { ChartHeader } from '@/components/ChartHeader/ChartHeader'
import {
  Container,
  ChartsContainer,
  ChartContainer,
} from '@/screens/ProgressCircleComponent/ProgressCircleComponent.styled'
import { ChartsTitles } from '@/components/ChartHeader/types'
import { ProgressCircle } from 'react-native-svg-charts'
import { Defs, LinearGradient, Stop, Text } from 'react-native-svg'
import { DeepProgressCircle } from '@/screens/ProgressCircleComponent/DeepProgressCircle/DeepProgressCircle'
import { Pacman } from '@/screens/ProgressCircleComponent/Pacman/Pacman'
import { RainbowProgress } from '@/screens/ProgressCircleComponent/RainbowProgress/RainbowProgress'

export const Gradient = () => (
  <Defs>
    <LinearGradient id={'gradient'} x1={'0%'} y1={'0%'} x2={'0%'} y2={'100%'}>
      <Stop offset={'0%'} stopColor={'rgb(194, 65, 244)'} stopOpacity={0.8} />
      <Stop offset={'100%'} stopColor={'rgb(134, 65, 244)'} stopOpacity={0.1} />
    </LinearGradient>
  </Defs>
)

export const ProgressCircleComponent = () => {
  return (
    <Container>
      <ChartHeader title={ChartsTitles.PROGRESS_CIRCLE} />
      <ChartsContainer>
        <ChartContainer>
          <ProgressCircle
            style={{ height: 200 }}
            progress={0.7}
            progressColor={'rgb(134, 65, 244)'}
            startAngle={-Math.PI}
            endAngle={Math.PI}
          />
        </ChartContainer>
        <ChartContainer>
          <ProgressCircle
            style={{ height: 200 }}
            progress={0.6}
            progressColor={'rgb(192, 0, 0)'}
            startAngle={-Math.PI * 2}
            endAngle={Math.PI * 2}
          />
        </ChartContainer>
        <ChartContainer>
          <ProgressCircle
            style={{ height: 200 }}
            progress={0.7}
            progressColor={'rgb(249, 166, 2)'}
            startAngle={-Math.PI * 0.8}
            endAngle={Math.PI * 0.8}
          />
        </ChartContainer>
        <ChartContainer>
          <ProgressCircle
            style={{ height: 200 }}
            progress={0.8}
            progressColor={'url(#gradient)'}
            backgroundColor={'rgba(194, 65, 244, 0.1)'}
            strokeWidth={15}
            startAngle={-Math.PI}
            cornerRadius={0}
            endAngle={Math.PI}>
            <Gradient />
            <Text
              x={-0.5}
              y={1.5}
              fill={'black'}
              textAnchor={'middle'}
              alignmentBaseline={'middle'}
              fontSize={36}
              fontWeight={'bolder'}
              stroke={'white'}
              opacity={'1'}
              strokeWidth={0.4}>
              80%
            </Text>
          </ProgressCircle>
        </ChartContainer>
        <ChartContainer>
          <ProgressCircle
            style={{ height: 200 }}
            progress={0.6}
            progressColor={'url(#gradient)'}
            backgroundColor={'rgba(194, 65, 244, 0.1)'}
            strokeWidth={7}
            startAngle={-Math.PI / 2}
            endAngle={Math.PI / 2}>
            <Gradient />
            <Text
              x={-0.5}
              y={-10}
              fill={'black'}
              textAnchor={'middle'}
              alignmentBaseline={'middle'}
              fontSize={33}
              fontWeight={'normal'}
              stroke={'white'}
              opacity={'1'}
              strokeWidth={0.4}>
              60%
            </Text>
          </ProgressCircle>
        </ChartContainer>
        <ChartContainer>
          <DeepProgressCircle />
        </ChartContainer>
        <ChartContainer>
          <RainbowProgress />
        </ChartContainer>
        <ChartContainer>
          <Pacman />
        </ChartContainer>
      </ChartsContainer>
    </Container>
  )
}
