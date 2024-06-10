import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import InputField from '../../Global/components/InputField';
import CustomButton from '../../Global/CustomButton';
import GlobalStyles from '../../Global/Branding/GlobalStyles';
import Colors from '../../Global/Branding/colors';
import InputTitle from '../../Global/components/InputTitle';
import { Ionicons } from '@expo/vector-icons';
import AuthStyles from './AuthStyles';
import { Login_Call } from '../../Global/Calls/ApiCalls';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingModal from '../../Global/components/LoadingModal';
const LoginScreen = ({ navigation }) => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [isPressed, setIspressed] = useState(false);
  const [loading, setLoading] = useState(false);


async function handleLogin(){
  // navigation.navigate("BottomNavigation")
  if(phone && password){
    LoginCall()
  }else{
    
    setIspressed(((p)=>!p))
  }
}

async function LoginCall(){
  setLoading(true)
  const result = await Login_Call(phone,password)
if(result === null){
  Alert.alert("Error","Someting Went Wrong!")
  setLoading(false)
  return null
}
  if(result.status === "200"){
    AsyncStorage.setItem("user",JSON.stringify(result.user))
    AsyncStorage.setItem("token",result.token)
    navigation.navigate("BottomNavigation")
    setLoading(false)
}
else if(result.status === "401"){
    Alert.alert("Error",result.message)
    setLoading(false)
}

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
      <LoadingModal 
      show={loading}
      />
    </View>
  );
};


export default LoginScreen;
