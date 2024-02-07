import * as React from 'react'
import {Image, Text,View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {Booking, Home, Profile} from '../Screens/index.js'
import imagePath from '../constants/imagePath.js'
import colors from '../styles/colors.js'
const BottomTab =createBottomTabNavigator();
export default function TabRoutes(){
    return(
        
            <BottomTab.Navigator screenOptions={{headerShown:false, tabBarInactiveTintColor:colors.black, tabBarActiveTintColor:colors.themeColor}}>
                <BottomTab.Screen name='Home' component={Home} options={{tabBarIcon:({focused})=>{return(<Image source={imagePath.Home} style={{tintColor: focused ? colors.themeColor : colors.black}}/>)}}}/>
                <BottomTab.Screen name='Profile' component={Profile} options={{tabBarIcon:({focused})=>{return(<Image source={imagePath.ProfileIcon} style={{tintColor: focused ? colors.themeColor : colors.black}}/>)}}}/>
                <BottomTab.Screen name='Booking' component={Booking} options={{tabBarIcon:({focused})=>{return(<Image source={imagePath.BookingIcon} style={{tintColor: focused ? colors.themeColor : colors.black}}/>)}}}/>     
            </BottomTab.Navigator>
        
    )
}