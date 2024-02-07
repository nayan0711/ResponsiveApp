import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import dummyData from './dummyData';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import colors from '../../styles/colors';
import imagePath from '../../constants/imagePath';
import ButtonComponent from '../../Components/ButtonComponent';

export default function Home() {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.flatContainer}>
        <View style={styles.flatFlex}>
        <Text>{item.date}</Text>
        <Image source={imagePath.ProfileIcon}/>
      </View>
      <Text>{item.name}</Text>
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
      <ButtonComponent btnText='Reject' btnStyle={{width:moderateScale(150), backgroundColor:'red'}}/>
      <ButtonComponent btnText='Accept'btnStyle={{width:moderateScale(150)}}/>
      </View>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerStyle}>
        <Text style={{fontSize:scale(20), color:colors.themeColor}}>Home</Text>
        <Image source={imagePath.Notification}/>
      </View>
      <View style={{borderBottomWidth:0.5, }}></View>
      <FlatList
        style={styles.flatStyle}
        data={dummyData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomWidth:0.5,
  },
  headerStyle:{
    flexDirection:'row',
    paddingVertical:moderateVerticalScale(18),
    alignItems:'center',
    justifyContent:'space-between',
    marginHorizontal:moderateScale(10)
  },
  flatFlex: {
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-between',
  },
  flatContainer:{
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    backgroundColor: 'white',
    borderRadius: moderateScale(4),
    margin: 2,
    elevation: 5, 
    padding: moderateScale(16),
  },
  flatStyle: {
    flex: 1,
  },
});
