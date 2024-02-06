import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { scale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import ButtonComponent from '../../Components/ButtonComponent';
import Routes from '../../Navigation/Routes';

export default function Login() {
  const navigation = useNavigation();
  const [isVisible, setVisible] = useState(false);

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
          />

          <TextInputWithLabel
            label="Password"
            placeholder="Enter your password"
            secureTextEntry={!isVisible}
            rightIcon={isVisible ? imagePath.showEye : imagePath.hideEye}

            onPress={() => setVisible(!isVisible)}
          />

          <TouchableOpacity style={styles.forgetView}>
            <Text style={styles.forgetText}>Forget Password?</Text>
          </TouchableOpacity>

          <ButtonComponent btnText='Login' />

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
