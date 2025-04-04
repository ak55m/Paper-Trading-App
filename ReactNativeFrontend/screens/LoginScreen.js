import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Provider as PaperProvider, TextInput as PaperTextInput, Button as PaperButton, DefaultTheme } from 'react-native-paper';
import axios from 'axios';
import { Context } from '../globalContext/globalContext';


const inputTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'white',
    background: 'white',
    text: '#147EFB',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: 'white',
  },
  image: {
    width: 200, // Adjust the width as needed
    height: 200, // Adjust the height as needed
    alignSelf: 'center', // Center the image horizontally
    marginBottom: 16,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 32,
    color: '#147EFB',
    alignSelf: 'flex-start', // Align the title to the left
  },
  input: {
    backgroundColor: 'white',
    borderBottomColor: '#d3d3d3',
    borderBottomWidth: 2,
    marginBottom: 16,
    width: '100%',
  },
  button: {
    backgroundColor: '#147EFB',
    borderRadius: 10,
    marginBottom: 16,
    width: '100%',
    elevation: 0,
  },
  secondaryText: {
    fontSize: 16,
    color: '#147EFB',
    marginBottom: 16,
  },
  switchModeText: {
    color: '#147EFB',
  },
});

function LoginScreen({ navigation }) {

  const globalContext = useContext(Context);
  const { setIsLoggedIn, appSettings, setToken } = globalContext;

  // const [securePassword, setSecurePassword] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/v1.0/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username.toLowerCase(),
          password: password,
        }),
      });
    
      if (!response.ok) {
        // Handle the error here
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    
      // Assuming the server returns JSON
      const data = await response.json();
    
      // Log the response
      console.log("Test:",data);
  
      // Log the response to the console
      console.log('Login response:', response.data);
      console.log('successful:', response.data.message);


      console.log('User details:', response.data.user);
      console.log('User token:', response.data.token);
  
      // Assuming your API returns a token upon successful login
      const token = response.data.token;
  
      // You can store the token or perform other actions as needed
  
      // Navigate to the Profile screen or perform other navigation logic
      navigation.navigate('ProfileScreen');
    } catch (error) {
      // Handle login error
      console.error('Login failed:', error.message);
      // You can show an error message to the user if needed
    }
  };

  return (
    <PaperProvider theme={inputTheme}>
      <View style={styles.container}>
        <Image
          source={require('./images/doge.png')} // Replace with the path to your image
          style={styles.image}
        />
        <View style={styles.content}>
          <Text style={styles.title}>Login</Text>
          <PaperTextInput
            placeholder="Username"
            mode="flat"
            style={styles.input}
            value={username}
            onChangeText={setUsername}
            underlineColor="#d3d3d3"
          />
          <PaperTextInput
            placeholder="Password"
            mode="flat"
            secureTextEntry
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            underlineColor="#d3d3d3"
          />
          <Text style={styles.secondaryText}>
            <Text onPress={() => navigation.navigate('Forgot Password')}>Forgot Password</Text>
          </Text>
          <PaperButton
            mode="contained"
            style={styles.button}
            onPress={handleLogin}
          >
            Sign In
          </PaperButton>
          <Text style={styles.switchModeText}>
            <Text onPress={() => navigation.navigate('Sign Up')}>Sign Up</Text>
          </Text>
        </View>
      </View>
    </PaperProvider>
  );
}

export default LoginScreen;


// SomeComponent.js
// import React, { useContext } from 'react';
// import { View, Text } from 'react-native';
// import { Context as GlobalContext } from '../globalContext/globalContext.js';

// function LoginScreen() {
//   const { isLoggedIn } = useContext(GlobalContext);

//   return (
//     <View>
//       <Text>{isLoggedIn ? 'User is logged in' : 'User is not logged in'}</Text>
//     </View>
//   );
// }

// export default LoginScreen;
