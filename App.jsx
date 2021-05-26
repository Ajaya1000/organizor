/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Animated,
} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  HomeScreen,
  LoginScreen,
  SettingScreen,
  SignupScreen,
  SplashScreen,
  CustomSideMenu,
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

const backgroundStyle = {
  backgroundColor: 'red',
  height: '100%',
};

const App = () => {
  const AnimatedValue = useRef(new Animated.Value(0)).current;
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);

  const navigationRef = React.createRef();

  /**
   *
   * @param {string} name
   * @param {object} params
   * @returns {void}
   *
   * utility function navigate to a different screen
   */
  const navigate = (name, params) =>
    navigationRef.current && navigationRef.current.navigate(name, params);

  /**
   *
   * @param {int} val val can only be 0 & 1.
   *                  0 being close & 1 is open
   */
  const toggleSideMenu = val => {
    setSideMenuOpen(!isSideMenuOpen);
    Animated.spring(AnimatedValue, {
      toValue: val,
      friction: 5,
      useNativeDriver: false,
    }).start();
  };

  return (
    <PaperProvider>
      <StatusBar hidden />
      <SafeAreaView style={backgroundStyle}>
        <CustomSideMenu
          navigate={navigate}
          toggleSideMenu={toggleSideMenu}
          navigationRef={navigationRef}
        />
        <Animated.View
          style={[
            {
              position: 'absolute',
              width: '100%',
              height: '100%',
            },
            {
              left: AnimatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: ['0%', '75%'],
              }),
              top: AnimatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: ['0%', '7%'],
              }),
              height: AnimatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: ['100%', '86%'],
              }),
              borderRadius: AnimatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 50],
              }),
            },
            {
              overflow: 'hidden',
            },
          ]}>
          <NavigationContainer ref={navigationRef}>
            <Stack.Navigator initialRouteName='Home'>
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
              <Stack.Screen options={{headerShown: false}} name='Home'>
                {props => (
                  <HomeScreen
                    {...props}
                    toggleSideMenu={toggleSideMenu}
                    isSideMenuOpen={isSideMenuOpen}
                  />
                )}
              </Stack.Screen>
              <Stack.Screen options={{headerShown: false}} name='Setting'>
                {props => (
                  <SettingScreen
                    {...props}
                    toggleSideMenu={toggleSideMenu}
                    isSideMenuOpen={isSideMenuOpen}
                  />
                )}
              </Stack.Screen>
            </Stack.Navigator>
          </NavigationContainer>
        </Animated.View>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
