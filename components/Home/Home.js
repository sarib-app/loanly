import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GlobalStyles from '../../Global/Branding/GlobalStyles';
import HeaderScreens from '../../Global/components/HeaderScreens';
import Header from '../../Global/components/Header';
import HomeStyles from './HomeStyles';
import { Entypo, FontAwesome, FontAwesome6, Octicons } from '@expo/vector-icons';
import Colors from '../../Global/Branding/colors';
import lock from '../../assets/Animationn/lock.json'
import LottieAnimation from '../../Global/components/LottieAnimation';
import CustomButton from '../../Global/CustomButton';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import KYCform from './KycForm';
import { WindowWidth } from '../../Global/components/Dimensions';
import InputTitle from '../../Global/components/InputTitle';
import DashboardScreen from './Dashboard';
import { userDasboardStats } from '../../Global/Calls/ApiCalls';
const HomeScreen = () => {
  const navigation = useNavigation()
  const focused = useIsFocused()
  const [KycStatus, setKycStatus] = useState("NA")
  const [loanTaken,setLoanTaken] = useState("NA")


useEffect(()=>{
async function getDashboardData(){
  const res= await userDasboardStats("5")
if(res != null){
  console.log(res.user_record)
  setKycStatus(res.user_record.kyc_submitted)
  setLoanTaken(res.user_record.loan_applied)
}
}
getDashboardData()

},[focused])



  return (
    <View style={GlobalStyles.Container}>
      <Header
        name={"Dasboard"}
        color={KycStatus === "approved"? Colors.PrimaryColor:Colors.BgColor}
      />


      {
        KycStatus != "approved" ?
<KYCform
kycStat={KycStatus}
/>
:
<DashboardScreen
loanTaken={loanTaken}
/>
}

    </View>
  );
};


export default HomeScreen;
