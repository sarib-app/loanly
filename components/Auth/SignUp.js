import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InputField from '../../Global/components/InputField';
import CustomButton from '../../Global/CustomButton';
import AuthStyles from './AuthStyles';
import GlobalStyles from '../../Global/Branding/GlobalStyles';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../Global/Branding/colors';

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isPressed, setIspressed] = useState(false);


  return (
    <View style={GlobalStyles.Container}>
    <View style={AuthStyles.TitleWraper}>
        <Ionicons name="chevron-back-outline" size={28} color={ Colors.FontColorI} />
      <Text style={AuthStyles.title}>Welocome</Text>
      <Text style={AuthStyles.titleTwo}>Sign Up To Continue</Text>
     

      </View>
      <InputField
        icon="mail-outline"
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        pressed={isPressed}
      />
      <InputField
        icon="call-outline"
        placeholder="Phone"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
        pressed={isPressed}
      />
      <InputField
        icon="person-outline"
        placeholder="Name"
        value={name}
        onChangeText={setName}
        pressed={isPressed}
      />
      <InputField
        icon="lock-closed-outline"
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        pressed={isPressed}
      />
      <CustomButton title="Sign Up" onPress={() => { /* Handle sign-up logic */ }} />
      <Text style={AuthStyles.signupText} onPress={() => navigation.navigate('Login')}>
        Already have an account? Login
      </Text>
    </View>
  );
};



export default SignupScreen;
