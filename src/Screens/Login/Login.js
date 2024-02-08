import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { scale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import ButtonComponent from '../../Components/ButtonComponent';
import Routes from '../../Navigation/Routes';
import { ForgetPassword } from '..';

export default function Login() {
  const navigation = useNavigation();
  const [isVisible, setVisible] = useState(false);

  //to check if email address is empty or not
  const [email,setEmail]=useState('')
  const [pass,setPass]=useState('')
  const isValidEmail=(email)=>{
    const expression=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
    return expression.test(email)
  }
  const handleLogin=()=>{
    if(email.trim()==='' && pass.trim()===''){
      Alert.alert('Error!','Please enter your Email & Password')
      }
    else if(email.trim()===''){
      Alert.alert('Error','Please enter your Email Address')
    } else if(!isValidEmail){
      Alert.alert('Error','Please enter valid Email Address')
    }
    else if(pass.trim()===''){
      Alert.alert('Error','Please enter your Password')
    }else{
    Alert.alert('Thankyou!','You are Logged in Successfully')
    navigation.navigate('Home')
    }
    
  
    console.log(email)
    console.log(pass)
  }
  return (
    <View style={styles.container}>
      <ScrollView style={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}
  showsHorizontalScrollIndicator={false}>
        {/* Background Image */}
        <ImageBackground
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5JqdVulugVR-6v_fXegEEtzbtFjPdF2BCfw&usqp=CAU'
          }}
          style={styles.imgStyle}
        >
          {/* Login Text */}
          <Text style={styles.loginTextStyle}>Login</Text>
        </ImageBackground>

        {/* Main Content */}
        <View style={styles.mainStyle}>
          {/* Text Input with Label */}
          <TextInputWithLabel
            label="Email Address"
            placeholder="Enter your email"
            onChangeText={(text)=>setEmail(text)}
            keyboardType="email-address"
          />

          <TextInputWithLabel
            label="Password"
            placeholder="Enter your password"
            secureTextEntry={!isVisible}
            rightIcon={isVisible ? imagePath.showEye : imagePath.hideEye}
            onChangeText={(text)=>setPass(text)}
            onPress={() => setVisible(!isVisible)}
            
          />

          <TouchableOpacity style={styles.forgetView} onPress={()=>navigation.navigate('ForgetPassword')}>
            <Text style={styles.forgetText}>Forget Password?</Text>
          </TouchableOpacity>

          <ButtonComponent btnText='Login' onPress={handleLogin}/>

          <View style={styles.joinView}>
            <Text>Not a Member?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('ChooseAccount')}>
              <Text style={{ color: colors.themeColor }}>JOIN NOW</Text>
            </TouchableOpacity>
          </View>

        </View>
          
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgStyle: {
    height: moderateScale(200),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginTextStyle: {
    fontSize: scale(32),
    color: 'white',
    fontWeight: 'bold',
  },
  mainStyle: {
    paddingHorizontal: moderateScale(24),
    paddingVertical: moderateVerticalScale(44),
  },
  forgetView: {
    alignItems: 'flex-end'
  },
  forgetText: {
    color: colors.themeColor,
    fontWeight: '600'
  },
  joinView: {
    flexDirection: 'row', justifyContent: 'center', marginTop: moderateScale(50)
  }
});
