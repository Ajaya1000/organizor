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
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
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
const styles = StyleSheet.create({
  common: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  view1: {
    left: 0,
    top: 0,
    backgroundColor: 'green',
  },
  view2: {
    left: '85%',
    top: '5%',
    height: '90%',
  },
});

const App = () => {
  const backgroundStyle = {
    backgroundColor: 'white',
    height: '100%',
  };

  const navigationRef = React.createRef();
  const navigate = (name, params) =>
    navigationRef.current && navigationRef.current.navigate(name, params);

  return (
    <PaperProvider>
      <StatusBar hidden />
      <SafeAreaView style={backgroundStyle}>
        <View style={[styles.common, styles.view1]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.common, styles.view2]}>
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
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
