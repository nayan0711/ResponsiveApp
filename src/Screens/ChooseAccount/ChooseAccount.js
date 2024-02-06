import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import HeaderComponent from '../../Components/HeaderComponent';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import ButtonComponent from '../../Components/ButtonComponent';
import imagePath from '../../constants/imagePath';
import { useNavigation } from '@react-navigation/native';
export default function ChooseAccount() {
  const navigation=useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <HeaderComponent />
        <View style={styles.optionView}>
          <Text style={styles.textStyle}>Choose your Account Type</Text>
          <Image source={imagePath.HomeIcon} style={styles.imageStyle}/>
          <Text style={styles.optionTextStyle}>Agency</Text>
          <Image source={imagePath.FreelancerIcon} style={styles.imageStyle}/>
          <Text style={styles.optionTextStyle}>Freelancer</Text>
          <ButtonComponent btnText='Continue' btnStyle={styles.btnStyle} onPress={()=>navigation.navigate('Register')}/>

        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  textStyle: {
    marginTop: moderateVerticalScale(20),
    fontSize: scale(27),
    color: 'black',
    textTransform:'uppercase',
    fontWeight:'bold',
    textAlign:'center',
  },
  optionView: {
    alignItems: 'center', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    flex: 1, 
    margin: moderateScale(24),
  },
  btnStyle: {
    width: '100%',
  },
  optionTextStyle:{
    fontSize:scale(18),
    color:'black',
    fontWeight:'bold'
  },
  imageStyle:{
    height:moderateScale(100),
    width:moderateScale(100),
  },


});
