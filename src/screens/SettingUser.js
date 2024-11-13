import React, { useState, useEffect } from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { fonts } from '../assets/fonts';
import { getAuth, signOut } from 'firebase/auth'; // Import Firebase Auth

const SettingUser = ({ navigation }) => {
  const handleLogout = () => {
    const auth = getAuth(); // Get Firebase Auth instance
    signOut(auth)
      .then(() => {
        // Navigate to login or any other page after successful logout
        navigation.replace('SignIn'); // Replace with your intended screen
      })
      .catch(error => {
        console.error('Error during logout:', error);
      });
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 30 }} showsVerticalScrollIndicator={false}>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.iconHeader}
          onPress={() => navigation.pop()}>
          <Icon name="angle-left" size={25} color="#3E3E40" />
        </TouchableOpacity>
        <Text style={styles.headerText}>User Profile</Text>
      </View>

      {/* Profile Picture */}
      <View style={styles.profileContainer}>
        <View style={styles.avatar}>
          <Image
            source={require('../assets/images/avatar.png')}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.editIcon}>
            <Icon name="pencil" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Form */}
      <View style={styles.form}>
        <Text style={styles.titleForm}>Personal Details</Text>

        <Text style={styles.label}>Email Address</Text>
        <TextInput style={styles.input} keyboardType="email-address" />

        <Text style={styles.label}>Full Name</Text>
        <TextInput style={styles.input} />

        <Text style={styles.label}>Telp Number</Text>
        <TextInput style={styles.input} keyboardType="phone-pad" />

        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} secureTextEntry />
      </View>

      <TouchableOpacity>
        <Text style={styles.changePasswordText}>Change Password</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveText}>Save</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.outButton} onPress={handleLogout}>
        <Text style={styles.outText}>LogOut</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 30,
  },
  header: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconHeader: {
    position: 'absolute',
    left: 1,
  },
  headerText: {
    fontFamily: fonts.primary.bold,
    fontSize: 18,
    textAlign: 'center',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  avatar: {
    position: 'relative',
  },
  editIcon: {
    position: 'absolute',
    bottom: 15,
    right: -5,
    backgroundColor: '#4392f9',
    borderRadius: 16,
    padding: 8,
  },
  form: {
    marginVertical: 10,
  },
  titleForm: {
    fontFamily: fonts.primary.bold,
    fontSize: 18,
    marginBottom: 10,
  },
  label: {
    fontFamily: fonts.primary.regular,
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    borderColor: '#c8c8c8',
    marginBottom: 15,
  },
  changePasswordText: {
    fontFamily: fonts.primary.medium,
    textAlign: 'right',
    textDecorationLine: 'underline',
    color: '#3CC7F5',
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: '#3CC7F5',
    borderRadius: 5,
    paddingVertical: 15,
    alignItems: 'center',
    marginVertical: 5,
  },
  saveText: {
    fontFamily: fonts.primary.bold,
    color: '#FFFFFF',
    fontSize: 16,
  },
    outButton: {
        backgroundColor: '#EE0000',
        borderRadius: 5,
        paddingVertical: 15,
        alignItems: 'center',
        marginVertical: 5,
      },
        outText: {
          fontFamily: fonts.primary.bold,
          color: '#FFFFFF',
          fontSize: 16,
        },
});
export default SettingUser;

//import React, {useState, useEffect} from 'react';
//
//import {
//  Image,
//  StatusBar,
//  StyleSheet,
//  TextInput,
//  TouchableOpacity,
//  View,
//  Text,
//  ScrollView,
//} from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome6';
//import {fonts} from '../assets/fonts';
//
//const SettingUser = ({navigation}) => {
//  return (
//    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 30 }} showsVerticalScrollIndicator={false}>
//      <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />
//
//      {/* Header */}
//      <View style={styles.header}>
//        <TouchableOpacity
//          style={styles.iconHeader}
//          onPress={() => navigation.pop()}>
//          <Icon name="angle-left" size={25} color="#3E3E40" />
//        </TouchableOpacity>
//        <Text style={styles.headerText}>User Profile</Text>
//      </View>
//
//      {/* Profile Picture */}
//      <View style={styles.profileContainer}>
//        <View style={styles.avatar}>
//          <Image
//            source={require('../assets/images/avatar.png')}
//            style={styles.profileImage}
//          />
//          <TouchableOpacity style={styles.editIcon}>
//            <Icon name="pencil" size={20} color="#FFFFFF" />
//          </TouchableOpacity>
//        </View>
//      </View>
//
//      {/* Form */}
//      <View style={styles.form}>
//        <Text style={styles.titleForm}>Personal Details</Text>
//
//        <Text style={styles.label}>Email Address</Text>
//        <TextInput style={styles.input} keyboardType="email-address" />
//
//        <Text style={styles.label}>Full Name</Text>
//        <TextInput style={styles.input} />
//
//        <Text style={styles.label}>Telp Number</Text>
//        <TextInput style={styles.input} keyboardType="phone-pad" />
//
//        <Text style={styles.label}>Password</Text>
//        <TextInput style={styles.input} secureTextEntry />
//      </View>
//
//      <TouchableOpacity>
//        <Text style={styles.changePasswordText}>Change Password</Text>
//      </TouchableOpacity>
//
//      <TouchableOpacity style={styles.saveButton}>
//        <Text style={styles.saveText}>Save</Text>
//      </TouchableOpacity>
//
//      <TouchableOpacity style={styles.outButton}>
//              <Text style={styles.outText}>LogOut</Text>
//            </TouchableOpacity>
//    </ScrollView>
//  );
//};
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    backgroundColor: '#FFFFFF',
//    padding: 30,
//  },
//  header: {
//    marginBottom: 20,
//    flexDirection: 'row',
//    alignItems: 'center',
//    justifyContent: 'center',
//  },
//  iconHeader: {
//    position: 'absolute',
//    left: 1,
//  },
//  headerText: {
//    fontFamily: fonts.primary.bold,
//    fontSize: 18,
//    textAlign: 'center',
//  },
//  profileContainer: {
//    alignItems: 'center',
//    marginBottom: 20,
//  },
//  profileImage: {
//    width: 120,
//    height: 120,
//    borderRadius: 60,
//    marginBottom: 20,
//  },
//  avatar: {
//    position: 'relative',
//  },
//  editIcon: {
//    position: 'absolute',
//    bottom: 15,
//    right: -5,
//    backgroundColor: '#4392f9',
//    borderRadius: 16,
//    padding: 8,
//  },
//  form: {
//    marginVertical: 10,
//  },
//  titleForm: {
//    fontFamily: fonts.primary.bold,
//    fontSize: 18,
//    marginBottom: 10,
//  },
//  label: {
//    fontFamily: fonts.primary.regular,
//    fontSize: 16,
//    marginBottom: 5,
//  },
//  input: {
//    height: 40,
//    borderWidth: 1,
//    borderRadius: 5,
//    paddingHorizontal: 10,
//    borderColor: '#c8c8c8',
//    marginBottom: 15,
//  },
//  changePasswordText: {
//    fontFamily: fonts.primary.medium,
//    textAlign: 'right',
//    textDecorationLine: 'underline',
//    color: '#3CC7F5',
//    marginBottom: 10,
//  },
//  saveButton: {
//    backgroundColor: '#3CC7F5',
//    borderRadius: 5,
//    paddingVertical: 15,
//    alignItems: 'center',
//    marginVertical: 5,
//  },
//  saveText: {
//    fontFamily: fonts.primary.bold,
//    color: '#FFFFFF',
//    fontSize: 16,
//  },
//    outButton: {
//        backgroundColor: '#EE0000',
//        borderRadius: 5,
//        paddingVertical: 15,
//        alignItems: 'center',
//        marginVertical: 5,
//      },
//        outText: {
//          fontFamily: fonts.primary.bold,
//          color: '#FFFFFF',
//          fontSize: 16,
//        },
//});
//export default SettingUser;
