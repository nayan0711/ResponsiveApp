import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderComponent from '../../Components/HeaderComponent'
import TextInputWithLabel from '../../Components/TextInputWithLabel'
import { useState } from 'react'
import imagePath from '../../constants/imagePath';
import { moderateScale, moderateVerticalScale, s, scale } from 'react-native-size-matters'
import ButtonComponent from '../../Components/ButtonComponent'
export default function ForgetPassword() {

  return (
    <View>
      <HeaderComponent/>
      <ScrollView showsVerticalScrollIndicator={false}
  showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <ImageBackground style={styles.imgStyle}source={imagePath.forgetPassword}/>
      <View style={{ height:moderateScale(48)}}><Text style={{fontSize:scale(24), textAlign:'center'}}>Forget Password</Text></View>
      <View style={{ height:moderateScale(48)}}><Text style={{fontSize:scale(14), textAlign:'center'}}>Enter the email address associated with your account</Text></View>
      <TextInputWithLabel 
      label="Email" 
      placeholder="Enter email to recieve OTP" 
      
      keyboardType='email-address'
      />
      <ButtonComponent btnText='Continue' btnStyle={{marginVertical:moderateVerticalScale(44)}}/>
      </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      
        marginHorizontal:moderateScale(24), 
    },
    imgStyle:{
      height:moderateScale(300),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    
    //marginBottom:moderateScale(60)
    }

})