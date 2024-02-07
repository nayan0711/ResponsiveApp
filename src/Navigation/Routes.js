import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Authstack from './AuthStack'
import HomeStack from './HomeStack'
import { ForgetPassword, SetPassword } from '../Screens'

const Routes = () => {
  return (
    <NavigationContainer>
        {false? HomeStack(): Authstack()}
        {/* <ForgetPassword/> */}
    </NavigationContainer>
  )
}

export default Routes