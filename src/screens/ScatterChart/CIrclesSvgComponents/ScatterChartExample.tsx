import React, { VFC } from 'react'
import Svg from 'react-native-svg'
import {
  renderBlackCirclesSvg,
  renderColoredCirclesSvg,
} from '@/screens/ScatterChart/utilityFunctions'
import { XAxis, YAxis } from 'react-native-svg-charts'
import { ChartContainer, CustomChart } from './ScatterChartExample.styled'
import { CustomGrid } from '@/screens/ScatterChart/chartsAdds'
import { SafeAreaView } from 'react-native'

interface Props {
  data: {
    x: number
    y: number
  }[]
  colored?: boolean
}

export const ScatterChartExample: VFC<Props> = ({ data, colored }) => {
  const xData = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
  const yData = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
  const axisSvg = {
    fill: 'grey',
    fontSize: 11,
  }
  const componentWidth = 330
  const componentHeight = 270
  const yProportion = componentHeight / 100
  const xProportion = componentWidth / 100

  return (
    <SafeAreaView style={{ flexDirection: 'row', flex: 1, backgroundColor: 'transparent' }}>
      <YAxis
        style={{ height: 300 - 10, marginTop: 40, backgroundColor: 'transparent' }}
        data={yData}
        formatLabel={(value) => `${value}`}
        contentInset={{ top: 10, bottom: 10 }}
        svg={axisSvg}
        min={0}
        max={100}
        numberOfTicks={10}
      />
      <ChartContainer>
        <CustomChart>
          <CustomGrid xData={xData} yData={yData} />
          <Svg
            key="svg"
            height={componentHeight + yProportion ** 2}
            width={componentWidth + xProportion ** 2}
            style={{
              position: 'absolute',
              left: -componentWidth / 100,
              top: -componentHeight / 100,
            }}>
            {colored
              ? renderColoredCirclesSvg(data, componentWidth, componentHeight)
              : renderBlackCirclesSvg(data, componentWidth, componentHeight)}
          </Svg>
        </CustomChart>
        <XAxis
          style={{
            marginLeft: -10,
            marginTop: 12,
            width: 350,
            height: 10,
            backgroundColor: 'transparent',
          }}
          data={xData}
          formatLabel={(value) => `${value * 10}`}
          contentInset={{ left: 10, right: 10 }}
          svg={axisSvg}
        />
      </ChartContainer>
    </SafeAreaView>
  )
}
