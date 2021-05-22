/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import LottieView from 'lottie-react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import PANDA from './assests/signuppanda.json';
import LoginScreen from './screens/auth/login.screen';
import SignupScreen from './screens/auth/signup.screen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    height: '100%',
  };

  return (
    <PaperProvider>
      <SafeAreaView style={backgroundStyle}>
        <SignupScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
