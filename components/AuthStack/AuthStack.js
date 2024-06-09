import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../Auth/Login';
import SignupScreen from '../Auth/SignUp';
import BottomNavigation from '../BottomNavigation/BottomNavigation';
import KycForm from '../KYCForm/KycForm';
import TakeLoanScreen from '../TakeLoanScreen.js/TakeLoanScreen';
import LoanHistoryScreen from '../HistoryScreens/LoanHistory';
import DepositHistoryScreen from '../HistoryScreens/AmountSubmit';
import Notifications from '../Notifications.js/Notifications';
import CustomerForm from '../CustomerForm/Customer';
import PayBackForm from '../PayBack/PayBackScreen';
const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="BottomNavigation" component={BottomNavigation} options={{ headerShown: false }} />
        <Stack.Screen name="KycForm" component={KycForm} options={{ headerShown: false }} />
        <Stack.Screen name="TakeLoanScreen" component={TakeLoanScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LoanHistoryScreen" component={LoanHistoryScreen} options={{ headerShown: false }} />
        <Stack.Screen name="DepositHistoryScreen" component={DepositHistoryScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Notifications" component={Notifications} options={{ headerShown: false }} />
        <Stack.Screen name="CustomerForm" component={CustomerForm} options={{ headerShown: false }} />
        <Stack.Screen name="PayBackForm" component={PayBackForm} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;
