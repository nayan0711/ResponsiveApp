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

const Stack=createNativeStackNavigator();
export default function Authstack(){
    return(
                
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Register" component={Register}/>
            <Stack.Screen name="ChooseAccount" component={ChooseAccount}/>
            <Stack.Screen name="ForgetPassword" component={ForgetPassword}/>
            <Stack.Screen name="SetPassword" component={SetPassword}/>
        </Stack.Navigator>

    )
} 