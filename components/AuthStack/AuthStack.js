import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../Auth/Login';
import SignupScreen from '../Auth/SignUp';
import BottomNavigation from '../BottomNavigation/BottomNavigation';
import ImageDetailScreen from '../ImageDetails/ImageDetails';
import FullImagePreviewScreen from '../ImageDetails/FullImagePreviewScreen';
import MockUpScreen from '../MockUp/MockUpScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MockUpScreen">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MockUpScreen" component={MockUpScreen} options={{ headerShown: false }} />

        <Stack.Screen name="BottomNavigation" component={BottomNavigation} options={{ headerShown: false }} />
        <Stack.Screen name="ImageDetailScreen" component={ImageDetailScreen} options={{ headerShown: false }} />
        <Stack.Screen name="FullImagePreviewScreen" component={FullImagePreviewScreen} options={{ headerShown: false }} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;
