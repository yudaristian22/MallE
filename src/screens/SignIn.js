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
import {globalStyles} from '../../globalStyles';
import {fonts} from '../assets/fonts';

const SignIn = ({navigation}) => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />

      <Text style={styles.welcomeText}>
        Welcome
        {'\n'}
        Back!
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

      {/* Forgot Password */}
      <TouchableOpacity
        style={styles.forgotPassword}
        onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.loginText}>Login</Text>
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

      {/* Sign Up */}
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Create An Account</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signupLink}>Sign Up</Text>
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
    color: '#000000',
    marginBottom: 20,
    textAlign: 'left',
    fontFamily: fonts.primary.bold,
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
  forgotPassword: {
    alignSelf: 'flex-end',
    elevation: 3,
  },
  forgotText: {
    fontSize: 14,
    color: '#3CC7F5',
    fontWeight: 'medium',
    fontFamily: fonts.primary.regular,
  },
  loginButton: {
    alignItems: 'center',
    backgroundColor: '#3CC7F5',
    paddingVertical: 15,
    marginVertical: 20,
    borderRadius: 6,
    elevation: 6,
  },
  loginText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: fonts.primary.bold,
  },
  orText: {
    textAlign: 'center',
    fontSize: 14,
    marginTop: 50,
    color: '#575757',
    fontFamily: fonts.primary.regular,
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
  signupContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  signupText: {
    fontSize: 14,
    color: '#575757',
    fontFamily: fonts.primary.regular,
  },
  signupLink: {
    fontSize: 14,
    marginLeft: 5,
    color: '#3cc7f5',
    fontFamily: fonts.primary.regular,
    textDecorationLine: 'underline',
  },
});
export default SignIn;
