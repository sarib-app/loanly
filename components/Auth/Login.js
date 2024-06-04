import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InputField from '../../Global/components/InputField';
import CustomButton from '../../Global/CustomButton';


const LoginScreen = ({ navigation }) => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Login</Text>
      <InputField
        icon="call-outline"
        placeholder="Phone"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />
      <InputField
        icon="lock-closed-outline"
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <CustomButton title="Login" onPress={() => { /* Handle login logic */ }} />
      <Text style={styles.signupText} onPress={() => navigation.navigate('Signup')}>
        Don't have an account? Sign up
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
  signupText: {
    color: '#6200EE',
    marginTop: 20,
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
