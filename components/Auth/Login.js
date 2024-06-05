import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InputField from '../../Global/components/InputField';
import CustomButton from '../../Global/CustomButton';
import GlobalStyles from '../../Global/Branding/GlobalStyles';
import Colors from '../../Global/Branding/colors';
import InputTitle from '../../Global/components/InputTitle';
import { Ionicons } from '@expo/vector-icons';
import AuthStyles from './AuthStyles';
const LoginScreen = ({ navigation }) => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [isPressed, setIspressed] = useState(false);


function handleLogin(){
  navigation.navigate("BottomNavigation")
setIspressed(((p)=>!p))
}

  return (
    <View style={GlobalStyles.Container}>
      <View style={AuthStyles.TitleWraper}>
        <Ionicons name="chevron-back-outline" size={28} color={Colors.FontColorI} />
      <Text style={AuthStyles.title}>Welocome</Text>
      <Text style={AuthStyles.titleTwo}>Login To Continue</Text>
     

      </View>
      <InputTitle 
      value={"Phone"}
      />
      <InputField
        icon="call-outline"
        placeholder="Phone"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
        pressed={isPressed}
      />
         <InputTitle 
      value={"Enter Password"}
      />
      <InputField
        icon="lock-closed-outline"
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}        
        pressed={isPressed}

      />
      <CustomButton title="Login" onPress={() => {handleLogin()}} />
      <Text style={AuthStyles.signupText} onPress={() => navigation.navigate('Signup')}>
        Don't have an account? Sign up
      </Text>
    </View>
  );
};


export default LoginScreen;
