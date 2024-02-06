import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Authstack from './AuthStack'
import HomeStack from './HomeStack'
const Routes = () => {
  return (
    <NavigationContainer>
        {true? HomeStack(): Authstack()}
    </NavigationContainer>
  )
}

export default Routes