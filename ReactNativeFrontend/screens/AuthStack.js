// this is for the authentication for users, login, register, forgot password 
// import React, { useContext } from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import LoginScreen from './LoginScreen.js';
// import RegisterScreen from './RegisterScreen.js';
// import ForgotPasswordScreen from './ForgotScreen.js';
// import { Provider } from "../globalContext/globalContext.js";


// import React, { useContext } from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import LoginScreen from './LoginScreen';
// import ProfileScreen from './ProfileScreen.js';
// import RegisterScreen from './RegisterScreen';
// // import ForgotPasswordScreen from './ForgotPasswordScreen';
// import { Context } from '../globalContext/globalContext';

// const Stack = createNativeStackNavigator();

// function AuthStack() {
//   const { isLoggedIn, token } = useContext(Context);

//   return (
//     <Stack.Navigator initialRouteName="Login">
//       {!isLoggedIn || !token ? (
//         <>
//           <Stack.Screen name="Login" component={LoginScreen} />
//           <Stack.Screen name="Register" component={RegisterScreen} />
//           {/* <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} /> */}
//         </>
//       ) : (
//         <>
//           {/* You might want to navigate to a different screen when already logged in */}
//           <Stack.Screen name="Profile" component={ProfileScreen} />
//         </>
//       )}
//     </Stack.Navigator>
//   );
// }

// export default AuthStack;


// AuthStack.js

import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import ProfileScreen from './ProfileScreen';
import RegisterScreen from './RegisterScreen';
import { Context } from '../globalContext/globalContext';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  const { isLoggedIn } = useContext(Context);

  return (
    <Stack.Navigator initialRouteName={isLoggedIn ? 'ProfileScreen' : 'Login'}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      {/* Add other screens as needed */}
    </Stack.Navigator>
  );
};

export default AuthStack;

