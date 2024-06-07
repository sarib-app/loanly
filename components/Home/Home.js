import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GlobalStyles from '../../Global/Branding/GlobalStyles';
import HeaderScreens from '../../Global/components/HeaderScreens';
import Header from '../../Global/components/Header';
import HomeStyles from './HomeStyles';
import { FontAwesome, Octicons } from '@expo/vector-icons';
import Colors from '../../Global/Branding/colors';
import lock from '../../assets/Animationn/lock.json'
import LottieAnimation from '../../Global/components/LottieAnimation';
import CustomButton from '../../Global/CustomButton';
import { useNavigation } from '@react-navigation/native';
import KYCform from './KycForm';
const HomeScreen = () => {
const navigation = useNavigation()
  const [KycStatus,setKycStatus]=useState("NA")
  const TxtClr = KycStatus == "pending"?"#FF7700":Colors.danger 
  const bgClr = KycStatus == "pending"?"#F5C49A":"#F5ABAB"
  const title = KycStatus ==  "pending"?"KYC submitted":"KYC needs to be uploaded"
  const desc =  KycStatus ==  "pending"?"Our team is reviewing your KYC once they approve it you ill be able to take Loans, Thankyou!":"To proceed with taking loans first you need to upload your KYC, its neccessary to get your kyc approvd first."
  return (
    <View style={GlobalStyles.Container}>
        <Header 
        name={"Dasboard"}
        color={Colors.PrimaryColor}
        /> 



        <View
        style={HomeStyles.TopLoanCard}
        >

<Text style={{color:Colors.inActive}}>
  Maximum Amount
</Text>
<Text style={{fontSize:40,fontWeight:'bold',color:Colors.BgColor}}>
  INR 50,0000
</Text>
<View
style={{flexDirection:'row'}}
>

<Octicons name="dot-fill" size={24} color="black" />
<View></View>
</View>
        </View>
     {/* <KYCform /> */}
    </View>
  );
};


export default HomeScreen;
