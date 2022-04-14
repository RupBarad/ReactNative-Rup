import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/Homescreen'
import AboutScreen from './components/Aboutscreen'
import Detailscreen from './components/Detailscreen'
import LoginScreen from './components/LoginScreen'
import ChangePasswordScreen from './components/ChangePasswordScreen';
import ProfileScreen from './components/ProfileScreen'



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        {/* <Stack.Screen name="About" component={AboutScreen} options={{ title: 'Overview' }} /> */}
        {/* <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={Detailscreen} /> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
