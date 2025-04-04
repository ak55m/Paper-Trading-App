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

function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');

  return (
    <PaperProvider theme={inputTheme}>
      <View style={styles.container}>
        <Image
          source={require('./images/doge.png')} // Replace with the path to your image
          style={styles.image}
        />
        <View style={styles.content}>
          <Text style={styles.title}>Forgot Password?</Text>
          <PaperTextInput
            placeholder="Email ID"
            mode="flat"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            underlineColor="#d3d3d3"
          />
          <PaperButton
            mode="contained"
            style={styles.button}
            onPress={() => {
              // Add your logic to handle the "Forgot Password" action
            }}
          >
            Submit
          </PaperButton>
          <Text style={styles.secondaryText}>
            <Text onPress={() => navigation.navigate('Login')}>Remember your password? Log in</Text>
          </Text>
        </View>
      </View>
    </PaperProvider>
  );
}

export default ForgotPasswordScreen;