import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './src/screens/SplashScreen';
import Splash1 from './src/screens/Splash1';
import Splash2 from './src/screens/Splash2';
import Splash3 from './src/screens/Splash3';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import ForgotPassword from './src/screens/ForgotPassword';
import ProfileDetailsMypurchase from './src/screens/ProfileDetailsMypurchase';
import ProfileDetailsMystore from './src/screens/ProfileDetailsMystore';
import SettingUser from './src/screens/SettingUser';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Splash1" component={Splash1} />
        <Stack.Screen name="Splash2" component={Splash2} />
        <Stack.Screen name="Splash3" component={Splash3} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen
          name="ProfileDetailsMypurchase"
          component={ProfileDetailsMypurchase}
        />
        <Stack.Screen
          name="ProfileDetailsMystore"
          component={ProfileDetailsMystore}
        />
        <Stack.Screen name="SettingUser" component={SettingUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
