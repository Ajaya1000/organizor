// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#307ecc',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});

const SplashScreen = ({navigation}) => {
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);

      //   AsyncStorage.getItem('user_id').then(value =>
      //     navigation.replace(value === null ? 'Auth' : 'DrawerNavigationRoutes'),
      //   );
      navigation.replace('Home');
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator
        animating={animating}
        color='#FFFFFF'
        size='large'
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;
