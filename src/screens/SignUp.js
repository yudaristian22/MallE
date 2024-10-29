import React, {useState, useEffect} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {fonts} from '../assets/fonts';

const SignUp = ({navigation}) => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />

      <Text style={styles.welcomeText}>
        Create an
        {'\n'}
        Account
      </Text>

      {/* Username or Email Input */}
      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="#626262" solid />
        <TextInput
          style={styles.input}
          placeholder="Username or Email"
          placeholderTextColor="#676767"
        />
      </View>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#626262" solid />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#676767"
        />
        <Icon name="eye" size={20} color="#626262" />
      </View>

      {/* Confirm Password Input */}
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#626262" solid />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#676767"
        />
        <Icon name="eye" size={20} color="#626262" />
      </View>

      {/* agreeText*/}
      <Text style={styles.agreeText}>
        By clicking the <Text style={styles.registerText}>Register</Text>{' '}
        button, you agree to the public offer
      </Text>

      {/* Create Account Button */}
      <TouchableOpacity style={styles.createButton}>
        <Text style={styles.createText}>Create Account</Text>
      </TouchableOpacity>

      {/* Or Continue With */}
      <Text style={styles.orText}>- OR Continue With -</Text>

      {/* Social Media */}
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialBorder}>
          <Image
            source={require('../assets/images/google.png')}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialBorder}>
          <Image
            source={require('../assets/images/apple.png')}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialBorder}>
          <Image
            source={require('../assets/images/facebook.png')}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Sign In */}
      <View style={styles.signInContainer}>
        <Text style={styles.signInText}>I Already Have an Account</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.signInLink}>Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    padding: 30,
  },
  welcomeText: {
    fontSize: 48,
    fontFamily: fonts.primary.bold,
    color: '#000000',
    marginBottom: 20,
    textAlign: 'left',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#a8a8a9',
    elevation: 1,
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
    marginTop: 5,
    fontFamily: fonts.primary.regular,
  },
  agreeText: {
    elevation: 3,
    marginVertical: 5,
    color: '#676767',
    marginRight: 20,
    fontFamily: fonts.primary.regular,
  },
  registerText: {
    fontSize: 14,
    color: '#3CC7F5',
    fontFamily: fonts.primary.regular,
  },
  createButton: {
    alignItems: 'center',
    backgroundColor: '#3CC7F5',
    paddingVertical: 15,
    marginVertical: 20,
    borderRadius: 6,
    elevation: 6,
  },
  createText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: fonts.primary.bold,
  },
  orText: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: fonts.primary.regular,
    marginTop: 10,
    color: '#575757',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  socialBorder: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d8f4fd',
    borderRadius: 30,
    padding: 10,
    width: 60,
    height: 60,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#3cc7f5',
  },
  socialIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
  },
  signInContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  signInText: {
    fontSize: 14,
    color: '#575757',
    fontFamily: fonts.primary.regular,
  },
  signInLink: {
    fontSize: 14,
    marginLeft: 5,
    color: '#3cc7f5',
    fontFamily: fonts.primary.bold,
    textDecorationLine: 'underline',
  },
});
export default SignUp;
