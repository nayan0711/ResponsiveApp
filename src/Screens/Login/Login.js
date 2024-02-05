import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { scale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';

export default function Login() {
  const navigation = useNavigation();
  const [isVisible, setVisible] = useState(true);

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <ImageBackground
        source={{
          uri:
            'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8yNV9zaW1wbGVfM2RfaWxsdXN0cmF0aW9uX29mX2FfcmVjb3Zlcnlfcm9vbV93aV80ZjhkNDIwNC02N2I4LTQwMDQtYTBlNy05YjljMjIyMzE2ZGVfMS5qcGc.jpg',
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
        />
        
        <TextInputWithLabel
          label="Password"
          placeholder="Enter your password"
          secureTextEntry={!isVisible}
          rightIcon={isVisible ? imagePath.hideEye : imagePath.showEye}
          
          onPress={() => setVisible(!isVisible)}
        />

<TouchableOpacity style={styles.forgetView}>
        <Text style={styles.forgetText}>Forget Password?</Text>
        </TouchableOpacity>
      </View>

      {/* Add any additional components or buttons as needed */}
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
    color: 'black',
    fontWeight: 'bold',
  },
  mainStyle: {
    paddingHorizontal: moderateScale(24),
    paddingVertical: moderateVerticalScale(44),
  },
  forgetView:{
    alignItems:'flex-end'
  },
  forgetText:{
    color:colors.themeColor,
    fontWeight:'600'
  }
});
