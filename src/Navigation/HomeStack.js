import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
    Login,
    ChooseAccount,
    ForgetPassword,
    Register,
    SetPassword,
    Home
} from '../Screens/index.js'
import TabRoutes from './TabRoutes.js';
import { ImageComponent } from 'react-native';

const Stack=createNativeStackNavigator();
export default function HomeStack(){
    return(
                
        <Stack.Navigator screenOptions={{headerShown:false}}>
             
            <Stack.Screen name="tabRoutes" component={TabRoutes}/>
        </Stack.Navigator>

    )
} 