import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Home() {
  return (
    <View>
     <FlatList/> 
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#2c3e50',
    }

})