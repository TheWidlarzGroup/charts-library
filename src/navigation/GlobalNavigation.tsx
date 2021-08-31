import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Home } from '@/screens/Home/Home'
import { AreaChartScreen } from '@/screens/AreaChartScreen/AreaChartScreen'
import { BarChart } from '@/screens/BarChart/BarChart'
import { LineChart } from '@/screens/LineChart/LineChart'
import { PieChart } from '@/screens/PieChart/PieChart'
import { ProgressCircle } from '@/screens/ProgressCircle/ProgressCircle'

export type StackRoutes = {
  Home: undefined
  AreaChart: undefined
  BarChart: undefined
  LineChart: undefined
  PieChart: undefined
  ProgressCircle: undefined
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
        component={BarChart}
        options={{ gestureEnabled: false }}
      />
      <GlobalStack.Screen
        name="LineChart"
        component={LineChart}
        options={{ gestureEnabled: false }}
      />
      <GlobalStack.Screen
        name="PieChart"
        component={PieChart}
        options={{ gestureEnabled: false }}
      />
      <GlobalStack.Screen
        name="ProgressCircle"
        component={ProgressCircle}
        options={{ gestureEnabled: false }}
      />
    </GlobalStack.Navigator>
  )
}
