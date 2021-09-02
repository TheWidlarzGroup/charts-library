import React from 'react'
import { ChartHeader } from '@/components/ChartHeader/ChartHeader'
import { ChartContainer, ChartsContainer, Container } from './PieChartComponent.styled'
import { ChartsTitles } from '@/components/ChartHeader/types'
import { PieChart } from 'react-native-svg-charts'
import { data10, data13 } from '@/data/data'
import { getPieChartData, getPieChartDataRounded, getPieChartDataSteps } from './utilityFunctions'
import { Labels } from '@/screens/PieChartComponent/chartAdds'
import { DeepPieChart } from '@/screens/PieChartComponent/DeepPieChart/DeepPieChart'

export const PieChartComponent = () => {
  const pieChartData = getPieChartData(data10)
  const pieChartDataRounded = getPieChartDataRounded(data10)
  const pieChartDataSteps = getPieChartDataSteps()

  return (
    <Container>
      <ChartHeader title={ChartsTitles.PIE_CHART} />
      <ChartsContainer>
        <ChartContainer>
          <PieChart style={{ width: 200, height: 200 }} data={pieChartData} />
        </ChartContainer>
        <ChartContainer>
          <PieChart
            style={{ width: 200, height: 200 }}
            innerRadius={0}
            data={pieChartData}
            padAngle={0}
            sort={(a, b) => b.key - a.key}
          />
        </ChartContainer>
        <ChartContainer>
          <PieChart
            style={{ width: 300, height: 300 }}
            data={pieChartDataRounded}
            innerRadius={35}
            outerRadius={75}
            labelRadius={120}
            sort={(a, b) => b.key - a.key}>
            <Labels />
          </PieChart>
        </ChartContainer>
        <ChartContainer>
          <PieChart
            style={{ width: 300, height: 300 }}
            outerRadius={'70%'}
            innerRadius={40}
            data={data13}
          />
        </ChartContainer>
        <ChartContainer>
          <PieChart
            style={{ width: 310, height: 300 }}
            outerRadius={'80%'}
            innerRadius={'45%'}
            data={pieChartDataSteps}
          />
        </ChartContainer>
        <ChartContainer>
          <DeepPieChart />
        </ChartContainer>
      </ChartsContainer>
    </Container>
  )
}
