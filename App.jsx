/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  HomeScreen,
  LoginScreen,
  SettingScreen,
  SignupScreen,
  SplashScreen,
} from './screens';

const Stack = createStackNavigator();

const AuthStack = () => (
  <Stack.Navigator initialRouteName='Login'>
    <Stack.Screen
      options={{headerShown: false}}
      name='Login'
      component={LoginScreen}
    />
    <Stack.Screen
      options={{headerShown: false}}
      name='Signup'
      component={SignupScreen}
    />
  </Stack.Navigator>
);

const App = () => {
  const backgroundStyle = {
    backgroundColor: 'white',
    height: '100%',
  };

  return (
    <PaperProvider>
      <SafeAreaView style={backgroundStyle}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Splash'>
            <Stack.Screen
              options={{headerShown: false}}
              name='Splash'
              component={SplashScreen}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name='Auth'
              component={AuthStack}
            />
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Setting' component={SettingScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
