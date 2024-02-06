import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { moderateScale, scale } from 'react-native-size-matters'
import colors from '../styles/colors'

export default function ButtonComponent(
    {btnText,
    btnStyle,
    onPress=()=>{}}
) {
  return (
    <TouchableOpacity style={{...styles.btnStyle,...btnStyle}} onPress={onPress} activeOpacity={0.8}>
      <Text style={styles.btnTextStyle}>{btnText}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    btnStyle:{
        height:moderateScale(48),
        backgroundColor:colors.themeColor,
        borderRadius:moderateScale(4),
        alignItems:'center',
        justifyContent:'center',
        marginVertical:moderateScale(14)
    },
    btnTextStyle:{
        fontSize:scale(12),
        color:'white',
        fontWeight:'bold',
        textTransform:'uppercase',
    }
})