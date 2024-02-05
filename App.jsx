import { View, Text } from 'react-native'
import React from 'react'
import Authstack from './src/Navigation/AuthStack'
import Routes from './src/Navigation/Routes'

const App = () => {
  return (
    <View style={{flex:1}}>
      <Routes/>
    </View>
  )
}

export default App