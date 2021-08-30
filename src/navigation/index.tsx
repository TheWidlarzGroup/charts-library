import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { GlobalNavigation } from './GlobalNavigation'

export const RootNavigation = () => (
  <NavigationContainer>
    <GlobalNavigation />
  </NavigationContainer>
)
