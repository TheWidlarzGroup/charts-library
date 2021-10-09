import React from 'react'
import { Circle, Line, G, Text } from 'react-native-svg'
import { PieChartData } from 'react-native-svg-charts'

interface LabelsProps {
  slices: {
    pieCentroid: number[]
    labelCentroid: number[]
    data: PieChartData
  }[]
}

export const Labels = (props: Partial<LabelsProps>) => {
  const { slices } = props as LabelsProps
  return (
    <>
      {slices.map((slice, index) => {
        const { labelCentroid, pieCentroid, data } = slice
        return (
          <G key={index}>
            <Line
              x1={labelCentroid[0]}
              y1={labelCentroid[1]}
              x2={pieCentroid[0]}
              y2={pieCentroid[1]}
              stroke={data?.svg && data.svg.fill}
            />

            <G x={labelCentroid[0]} y={labelCentroid[1]}>
              <Circle r={22} fill={data?.svg && data.svg.fill} />
              <Circle r={17} fill={'white'} />
              <Text
                key={index}
                x={-0.5}
                y={1.5}
                fill={'black'}
                textAnchor={'middle'}
                alignmentBaseline={'middle'}
                fontSize={16}
                fontWeight={'bolder'}
                stroke={'white'}
                opacity={'1'}
                strokeWidth={0.4}>
                {data.value}
              </Text>
            </G>
          </G>
        )
      })}
    </>
  )
}
