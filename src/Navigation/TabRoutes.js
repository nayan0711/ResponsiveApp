import * as React from 'react'
import {Text,View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {Booking, Home, Profile} from '../Screens/index.js'
const BottomTab =createBottomTabNavigator();
export default function TabRoutes(){
    return(
        
            <BottomTab.Navigator>
                <BottomTab.Screen name='Home' component={Home}/>
                <BottomTab.Screen name='Profile' component={Profile}/>
                <BottomTab.Screen name='Booking' component={Booking}/>     
            </BottomTab.Navigator>
        
    )
}