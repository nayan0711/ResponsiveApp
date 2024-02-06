import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import HeaderComponent from '../../Components/HeaderComponent'
import ButtonComponent from '../../Components/ButtonComponent'
import { moderateScale, scale, moderateVerticalScale } from 'react-native-size-matters'
import TextInputWithLabel from '../../Components/TextInputWithLabel'
import imagePath from '../../constants/imagePath'

export default function Register() {
  const [ischecked,setchecked]=useState(true)
  return (
    <View style={styles.container}>
      <HeaderComponent />
      <ScrollView style={{flexGrow:1}} showsVerticalScrollIndicator={false}
  showsHorizontalScrollIndicator={false}>
        <View style={{ marginVertical: moderateScale(12) }}></View>
        <View style={styles.mainStyle}>
          <TextInputWithLabel
            label="First Name"
            placeholder="Enter First Name"
            inputStyle={{ flex: 1 }}
          />
          <View style={{ marginHorizontal: moderateScale(8) }}></View>
          <TextInputWithLabel
            label="Last Name"
            placeholder="Enter Last Name"
            inputStyle={{ flex: 1 }}
          />
        </View>
        <View style={styles.FlexStyle}>
          <TextInputWithLabel
            label="Salon name"
            placeholder="Enter Last Name"
            inputStyle={{}}
          />
          <TextInputWithLabel
            label="Date of Birth"
            placeholder="Ex: 07/11/2002"
          />
          <TextInputWithLabel
            label="Email"
            placeholder="Enter your Email"
          />
        </View>
        <View style={styles.mainStyle}>
          <TextInputWithLabel
            label="Country"
            placeholder="Ex: India"
            inputStyle={{ flex: 1 }}
          />
          <View style={{ marginHorizontal: moderateScale(8) }}></View>
          <TextInputWithLabel
            label="Postal/Zip Code"
            placeholder="Ex: 75001"
            inputStyle={{ flex: 1 }}
          />
        </View>
        <View style={styles.FlexStyle}>
          <TextInputWithLabel
            label="Address"
            placeholder="Enter your Address"
          />
          <TextInputWithLabel
            label="Referral Code"
            placeholder="APPLY COUPON"
          />
        </View>
        <TouchableOpacity style={[styles.mainStyle,{marginHorizontal:moderateScale(16), marginVertical:moderateScale(2)}]} onPress={()=>setchecked(!ischecked)}>
          <Image source={!ischecked?imagePath.unchecked:imagePath.checked }/>
          <Text>By Logging in, you agree to NOOVVOO's Privacy Policy & Terms of Use</Text>
        </TouchableOpacity>
        <ButtonComponent btnText={'Register'} btnStyle={styles.btnStyle} />
        </ScrollView >
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: moderateScale(4),
  },
  btnStyle: {
    marginHorizontal: moderateScale(18),
  },
  mainStyle: {
    paddingHorizontal: moderateScale(24),
    marginTop: moderateVerticalScale(4),
    flexDirection: 'row',

  },
  FlexStyle: {
    marginHorizontal: moderateScale(28),
  }

})