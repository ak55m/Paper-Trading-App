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

import Tabs from './navigation/tabs.js';


// const Tab = createBottomTabNavigator();

function App() {
  return (
    <PaperProvider>

      <NavigationContainer>
        <Tabs />
      </NavigationContainer>

    </PaperProvider>

  );
}

export default App;




