/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// App.js
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as GlobalContextProvider } from './globalContext/globalContext.js'; // Adjust the path according to your project structure


import Tabs from './navigation/tab.js';


// const Tab = createBottomTabNavigator();

function App() {
  return (
    <PaperProvider>

      <GlobalContextProvider>
        <NavigationContainer>
          <Tabs />
        </NavigationContainer>
      </GlobalContextProvider>

    </PaperProvider>

  );
}

export default App;




