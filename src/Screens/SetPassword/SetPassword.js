import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderComponent from '../../Components/HeaderComponent'
import TextInputWithLabel from '../../Components/TextInputWithLabel'
import { useState } from 'react'
import imagePath from '../../constants/imagePath';
import { moderateScale, moderateVerticalScale, s, scale } from 'react-native-size-matters'
import ButtonComponent from '../../Components/ButtonComponent'
export default function SetPassword() {
  const [isVisible, setVisible] = useState(false);
  return (
    <View>
      <HeaderComponent/>
      <View style={styles.container}>
      <View style={{ height:moderateScale(48)}}><Text style={{fontSize:scale(24), textAlign:'center'}}>Set Password</Text></View>
      <View style={{ height:moderateScale(48)}}><Text style={{fontSize:scale(14), textAlign:'center'}}>Set Password for your new Account</Text></View>
      <TextInputWithLabel 
      label="Password" 
      placeholder="Please enter your Password" 
      rightIcon={isVisible ? imagePath.showEye : imagePath.hideEye} 
      secureTextEntry={!isVisible} 
      onPress={() => setVisible(!isVisible)}
      />
      <ButtonComponent btnText='Continue' btnStyle={{marginVertical:moderateVerticalScale(44)}}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      
        marginHorizontal:moderateScale(24), marginVertical:moderateVerticalScale(56) 
    }

})