// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-mJ0HPy5ktX59OP354xtORdjedsQFa-8",
  authDomain: "malle-2df87.firebaseapp.com",
  projectId: "malle-2df87",
  storageBucket: "malle-2df87.appspot.com",
  messagingSenderId: "240332207310",
  appId: "1:240332207310:web:77fb70baa526666a180c9f",
  measurementId: "G-0HLHB6L0WZ"
};

// Initialize Firebase
const FIREBASE_APP = initializeApp(firebaseConfig);
const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { FIREBASE_AUTH };
