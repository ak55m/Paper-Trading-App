import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Provider as PaperProvider, TextInput as PaperTextInput, Button as PaperButton, DefaultTheme } from 'react-native-paper';
import axios from 'axios'; // Import axios for making API requests


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

function RegisterScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    // Function to handle user registration
    const registerUser = async () => {
        if (password !== confirmPassword) {
        // Passwords don't match, display an error message
        alert('Passwords do not match');
        return;
        }

        try {
        const response = await axios.post('https://your-backend-url/api/register/', {
            username: username, // Use the email as the username
            password: password,
        });

        console.log('Registration successful:', response.data.message);
        // Navigate to a login screen or another screen as needed
        } catch (error) {
        console.error('Registration failed:', error.response.data.error);
        // Handle registration failure, e.g., display an error message
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
                <Text style={styles.title}>Sign Up</Text>
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
                <PaperTextInput
                placeholder="Confirm Password"
                mode="flat"
                secureTextEntry
                style={styles.input}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                underlineColor="#d3d3d3"
                />
            <PaperButton
                mode="contained"
                style={styles.button}
                onPress={registerUser}
                >
                Sign Up
            </PaperButton>
            <Text style={styles.switchModeText}>
                <Text onPress={() => navigation.navigate('Login')}>Already have an account? Login</Text>
            </Text>
            </View>
        </View>
        </PaperProvider>
    );
}




export default RegisterScreen;


