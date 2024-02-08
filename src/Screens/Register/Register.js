import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import HeaderComponent from '../../Components/HeaderComponent'
import ButtonComponent from '../../Components/ButtonComponent'
import { moderateScale, scale, moderateVerticalScale } from 'react-native-size-matters'
import TextInputWithLabel from '../../Components/TextInputWithLabel'
import imagePath from '../../constants/imagePath'
import { useNavigation } from '@react-navigation/native'
import { Alert } from 'react-native'
import RNDateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker'
import InputForDate from '../../Components/InputForDate'
export default function Register() {
  const [ischecked,setchecked]=useState(true)
  const navigation=useNavigation();
  const [fName,setfName]=useState('')
  const [lName,setlName]=useState('')
  const [sName,setsName]=useState('')
  
  const handelRegister=()=>{
    if(fName.trim()==''){
      Alert.alert('Error', 'Enter First Name')
    }
    else if(lName.trim()==''){
      Alert.alert('Error', 'Enter Last Name')
    }
    else if(sName.trim()==''){
      Alert.alert('Error','Enter Salon Name')
    }
    

  }
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
            onChangeText={(text)=>setfName(text)}
          />
          <View style={{ marginHorizontal: moderateScale(8) }}></View>
          <TextInputWithLabel
            label="Last Name"
            placeholder="Enter Last Name"
            inputStyle={{ flex: 1 }}
            onChangeText={(text)=>setlName(text)}
          />
        </View>
        <View style={styles.FlexStyle}>
          <TextInputWithLabel
            label="Salon name"
            placeholder="Enter Last Name"
            inputStyle={{}}
            onChangeText={(text)=>setsName(text)}
          />
        <InputForDate
        label="Date of Birth"
        placeholder="Select your date of birth"
        onChangeText={(date) => console.log("Selected date:", date.toLocaleDateString())}
    
        />
         {/* <TextInputWithLabel
            label="Date of Birth"
            placeholder="Ex: 07/11/2002"
            
          />            */}
          <TextInputWithLabel
            label="Email"
            placeholder="Enter your Email"
            keyboardType='email-address'
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
            keyboardType='email-address'
          />
          <TextInputWithLabel
            label="Referral Code"
            placeholder="APPLY COUPON"
            keyboardType='email-address'
          />
        </View>
        <TouchableOpacity style={[styles.mainStyle,{marginHorizontal:moderateScale(16), marginVertical:moderateScale(2)}]} onPress={()=>setchecked(!ischecked)}>
          <Image source={!ischecked?imagePath.unchecked:imagePath.checked }/>
          <Text>By Logging in, you agree to NOOVVOO's Privacy Policy & Terms of Use</Text>
        </TouchableOpacity>
        <ButtonComponent btnText={'Register'} btnStyle={styles.btnStyle} onPress={handelRegister}/>
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