import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InputField from '../../Global/components/InputField';
import CustomButton from '../../Global/CustomButton';

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <InputField
        icon="mail-outline"
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <InputField
        icon="call-outline"
        placeholder="Phone"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />
      <InputField
        icon="person-outline"
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <InputField
        icon="lock-closed-outline"
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <CustomButton title="Sign Up" onPress={() => { /* Handle sign-up logic */ }} />
      <Text style={styles.loginText} onPress={() => navigation.navigate('Login')}>
        Already have an account? Login
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6200EE',
    marginBottom: 20,
  },
  loginText: {
    color: '#6200EE',
    marginTop: 20,
    textDecorationLine: 'underline',
  },
});

export default SignupScreen;
