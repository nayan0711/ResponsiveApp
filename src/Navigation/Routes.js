import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Authstack from './AuthStack'
const Routes = () => {
  return (
    <NavigationContainer>
        {Authstack()}
    </NavigationContainer>
  )
}

export default Routes