import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Provider as PaperProvider, TextInput as PaperTextInput, Button as PaperButton, DefaultTheme } from 'react-native-paper';

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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Make a POST request to the login API
      const response = await axios.post('http://localhost:8000/api/v1.0/login/', {
        email: email,
        password: password,
      });
  
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
            value={email}
            onChangeText={setEmail}
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
            Login
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
