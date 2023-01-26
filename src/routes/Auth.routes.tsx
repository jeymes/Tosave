import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Login } from '../screens/Login';
import React from 'react';
import { Register } from '../screens/Register';

const {Navigator, Screen} = createNativeStackNavigator();

export function AuthRoutes(){
  return(
    <Navigator screenOptions={{headerShown: false}}>

      <Screen
      name='login'
      component={Login}
      />

      <Screen
      name='register'
      component={Register}
      />
      
    </Navigator>
  )
}