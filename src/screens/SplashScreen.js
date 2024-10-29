import React, {useState, useEffect} from 'react';
import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import {StackActions} from '@react-navigation/native';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    const interval = setTimeout(() => {
      // Navigasi
      navigation.dispatch(StackActions.replace('Splash1'));
    }, 2000);
    return () => clearTimeout(interval);
  });

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />

      <Image
        source={require('../assets/images/Malle.png')}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '50%',
    height: '20%',
  },
});

export default SplashScreen;
