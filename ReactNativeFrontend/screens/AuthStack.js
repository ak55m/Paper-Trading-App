// this is for the authentication for users, login, register, forgot password 
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen.js';
import RegisterScreen from './RegisterScreen.js';
import ForgotPasswordScreen from './ForgotScreen.js';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen}  />
      <Stack.Screen name="Sign Up" component={RegisterScreen} />
      <Stack.Screen name="Forgot Password" component={ForgotPasswordScreen} />

    </Stack.Navigator>
  );
}

export default AuthStack;


