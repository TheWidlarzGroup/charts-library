import React from 'react'
import { ChartHeader } from '@/components/ChartHeader/ChartHeader'
import { ChartContainer, ChartsContainer, Container } from './PieChartComponent.styled'
import { ChartsTitles } from '@/components/ChartHeader/types'
import { PieChart } from 'react-native-svg-charts'
import { data10, data11, data12, data13, data2, data5, data8, data9 } from '@/data/data'
import { getPieChartData, getPieChartDataRounded, getPieChartDataSteps } from './utilityFunctions'
import { Labels } from '@/screens/PieChartComponent/chartAdds'
import Svg from 'react-native-svg'

export const PieChartComponent = () => {
  const pieChartData = getPieChartData(data10)
  const pieChartData2 = getPieChartData(data11)
  const pieChartData3 = getPieChartData(data12)
  const pieChartData4 = getPieChartData(data9)
  const pieChartData5 = getPieChartData(data8)
  const pieChartData6 = getPieChartData(data5)
  const pieChartData7 = getPieChartData(data2)
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
          <PieChart
            style={{ width: 250, height: 250 }}
            innerRadius={25}
            outerRadius={35}
            data={pieChartData}>
            <Svg>
              <PieChart
                style={{ width: 250, height: 250 }}
                innerRadius={40}
                outerRadius={50}
                data={pieChartData2}>
                <Svg>
                  <PieChart
                    style={{ width: 250, height: 250 }}
                    innerRadius={55}
                    outerRadius={65}
                    data={pieChartData3}>
                    <Svg>
                      <PieChart
                        style={{ width: 250, height: 250 }}
                        innerRadius={70}
                        outerRadius={80}
                        data={pieChartData4}>
                        <Svg>
                          <PieChart
                            style={{ width: 250, height: 250 }}
                            innerRadius={85}
                            outerRadius={95}
                            data={pieChartData5}>
                            <Svg>
                              <PieChart
                                style={{ width: 250, height: 250 }}
                                innerRadius={100}
                                outerRadius={110}
                                data={pieChartData6}>
                                <Svg>
                                  <PieChart
                                    style={{ width: 250, height: 250 }}
                                    innerRadius={115}
                                    outerRadius={125}
                                    data={pieChartData7}
                                  />
                                </Svg>
                              </PieChart>
                            </Svg>
                          </PieChart>
                        </Svg>
                      </PieChart>
                    </Svg>
                  </PieChart>
                </Svg>
              </PieChart>
            </Svg>
          </PieChart>
        </ChartContainer>
      </ChartsContainer>
    </Container>
  )
}
