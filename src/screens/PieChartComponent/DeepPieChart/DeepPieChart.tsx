import React from 'react'
import Svg from 'react-native-svg'
import { PieChart } from 'react-native-svg-charts'
import { getPieChartData } from '@/screens/PieChartComponent/utilityFunctions'
import { data10, data11, data12, data2, data5, data8, data9 } from '@/data/data'

export const DeepPieChart = () => {
  const pieChartData = getPieChartData(data10)
  const pieChartData2 = getPieChartData(data11)
  const pieChartData3 = getPieChartData(data12)
  const pieChartData4 = getPieChartData(data9)
  const pieChartData5 = getPieChartData(data8)
  const pieChartData6 = getPieChartData(data5)
  const pieChartData7 = getPieChartData(data2)

  return (
    <>
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
    </>
  )
}
