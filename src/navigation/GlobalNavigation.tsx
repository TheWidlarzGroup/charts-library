import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Home } from '@/screens/Home/Home'
import { AreaChartScreen } from '@/screens/AreaChartScreen/AreaChartScreen'
import { BarChartComponent } from '@/screens/BarChartComponent/BarChartComponent'
import { LineChartComponent } from '@/screens/LineChartComponent/LineChartComponent'
import { PieChartComponent } from '@/screens/PieChartComponent/PieChartComponent'
import { ProgressCircleComponent } from '@/screens/ProgressCircleComponent/ProgressCircleComponent'
import { Axes } from '@/screens/Axes/Axes'
import { ScatterChart } from '@/screens/ScatterChart/ScatterChart'

export type StackRoutes = {
  Home: undefined
  AreaChart: undefined
  BarChart: undefined
  LineChart: undefined
  PieChart: undefined
  ProgressCircle: undefined
  Axes: undefined
  ScatterChart: undefined
}

const GlobalStack = createStackNavigator<StackRoutes>()

export const GlobalNavigation = () => {
  return (
    <GlobalStack.Navigator screenOptions={{ headerShown: false }}>
      <GlobalStack.Screen name="Home" component={Home} options={{ gestureEnabled: false }} />
      <GlobalStack.Screen
        name="AreaChart"
        component={AreaChartScreen}
        options={{ gestureEnabled: false }}
      />
      <GlobalStack.Screen
        name="BarChart"
        component={BarChartComponent}
        options={{ gestureEnabled: false }}
      />
      <GlobalStack.Screen
        name="LineChart"
        component={LineChartComponent}
        options={{ gestureEnabled: false }}
      />
      <GlobalStack.Screen
        name="PieChart"
        component={PieChartComponent}
        options={{ gestureEnabled: false }}
      />
      <GlobalStack.Screen
        name="ProgressCircle"
        component={ProgressCircleComponent}
        options={{ gestureEnabled: false }}
      />
      <GlobalStack.Screen name="Axes" component={Axes} options={{ gestureEnabled: false }} />
      <GlobalStack.Screen
        name="ScatterChart"
        component={ScatterChart}
        options={{ gestureEnabled: false }}
      />
    </GlobalStack.Navigator>
  )
}
