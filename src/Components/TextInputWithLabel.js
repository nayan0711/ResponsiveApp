import React, { useState } from 'react';
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import { StyleSheet, Text, View, TextInput, Image, Touchable, TouchableOpacity } from 'react-native';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import DateTimePicker from 'react-native-modal-datetime-picker';

export default function TextInputWithLabel({ 
  label,
  placeholder, 
  secureTextEntry, 
  rightIcon,
  onPress,
  inputStyle,
  onChangeText=()=>{},
  isdate,
  ...props }) {
  
  
  return (
    <View style={styles.inputStyle} {...inputStyle}>
      <Text>{label}</Text>
      <View style={styles.inputViewStyle}>
       {isdate? 
       <RNDateTimePicker mode="date" value={new Date()} placeholderText='Ex: 07/11/2002'/>
       :
       <TextInput
       placeholder={placeholder}
       style={styles.inlinestyle}
       keyboardType={props.keyboardType || 'default'}
       {...props}
       secureTextEntry={secureTextEntry}
       onChangeText={onChangeText}
     />

       } 

        {!!rightIcon? <TouchableOpacity onPress={onPress}>
        <Image source={rightIcon} />
        </TouchableOpacity>:null}
        
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,.08)',
    borderRadius: moderateScale(4),
    marginBottom: moderateVerticalScale(30),

  },
  inlinestyle: {
    paddingVertical: moderateVerticalScale(8),
    fontSize: scale(13),

  },
  inputViewStyle: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  }
});
