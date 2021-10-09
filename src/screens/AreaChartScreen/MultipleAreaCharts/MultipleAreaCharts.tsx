import React from 'react'
import { AreaChart, Grid } from 'react-native-svg-charts'
import { data, data2, data3 } from '@/data/data'
import { Line } from '@/screens/AreaChartScreen/chartAdds'
import { StyleSheet } from 'react-native'

export const MultipleAreaCharts = () => {
  return (
    <>
      <AreaChart
        style={{ height: 200 }}
        data={data}
        gridMin={-120}
        gridMax={120}
        contentInset={{ top: 30, bottom: 30 }}
        svg={{ fill: 'rgba(94, 160, 113, 0.8)' }}>
        <Line line={'line'} />
        <Grid />
      </AreaChart>
      <AreaChart
        style={StyleSheet.absoluteFill}
        data={data2}
        gridMin={-120}
        gridMax={120}
        contentInset={{ top: 30, bottom: 30 }}
        svg={{ fill: 'rgba(215, 204, 0, 0.8)' }}>
        <Line line={'line'} />
      </AreaChart>
      <AreaChart
        style={StyleSheet.absoluteFill}
        data={data3}
        gridMin={-120}
        gridMax={120}
        contentInset={{ top: 30, bottom: 30 }}
        svg={{ fill: 'rgba(94, 20, 113, 0.8)' }}>
        <Line line={'line'} />
      </AreaChart>
    </>
  )
}
