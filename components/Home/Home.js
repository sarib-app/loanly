import React, { useState } from 'react';
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
import { useNavigation } from '@react-navigation/native';
import KYCform from './KycForm';
import { WindowWidth } from '../../Global/components/Dimensions';
import InputTitle from '../../Global/components/InputTitle';
import DashboardScreen from './Dashboard';
const HomeScreen = () => {
  const navigation = useNavigation()
  const [KycStatus, setKycStatus] = useState("NA")
  const TxtClr = KycStatus == "pending" ? "#FF7700" : Colors.danger
  const bgClr = KycStatus == "pending" ? "#F5C49A" : "#F5ABAB"
  const title = KycStatus == "pending" ? "KYC submitted" : "KYC needs to be uploaded"
  const desc = KycStatus == "pending" ? "Our team is reviewing your KYC once they approve it you ill be able to take Loans, Thankyou!" : "To proceed with taking loans first you need to upload your KYC, its neccessary to get your kyc approvd first."


  return (
    <View style={GlobalStyles.Container}>
      <Header
        name={"Dasboard"}
        color={Colors.BgColor}
      />
<KYCform/>
{/* <DashboardScreen/> */}

    </View>
  );
};


export default HomeScreen;
