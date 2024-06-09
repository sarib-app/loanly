import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert ,TextInput} from 'react-native';
import GlobalStyles from '../../Global/Branding/GlobalStyles';
import Header from '../../Global/components/Header';
import LoanStyles from './LoanStyles';
import Colors from '../../Global/Branding/colors';
import { Entypo } from '@expo/vector-icons';
import InputField from '../../Global/components/InputField';
import InputTitle from '../../Global/components/InputTitle';
import BillsCard from './BillsCard';


const TakeLoanScreen = () => {
//   const navigation = useNavigation()
 const [requstLoanAmount,setRequestLoanAmount]=useState("")
 const [period,setPeriod]=useState(3)



 function onSetLoanSmount(e){
    console.log(e)
    if(e <= 150000){
        setRequestLoanAmount(e)
    }
    else{
        Alert.alert("Denied","You can not request more than 150,000 INR")
    }
 }

 function OnIconPress(e){
    console.log(requstLoanAmount)
if(e== "+"){
if(requstLoanAmount+1 <= 150000){

    setRequestLoanAmount(Number(requstLoanAmount)+ +1)
    }
     
}else{
    if(requstLoanAmount-1 >= 0){

        setRequestLoanAmount(Number(requstLoanAmount)-1)
        }
}
 }

  return (
    <View style={GlobalStyles.Container}>
      <Header
        name={"Loan Screen"}
        // color={Colors.PrimaryColor}
      />
<View style={LoanStyles.TopLoanCard}>


        <Text style={LoanStyles.TopCardTitle}>
          Total Loan Amount
        </Text>
        <Text style={{ color: Colors.placeHolder }}>
          Maximum Amount: ₹ 150,000
        </Text>

        <View style={[GlobalStyles.RowMaker,{marginTop:10,justifyContent:"space-between",marginBottom:10}]}>
<TouchableOpacity 

onPress={()=> OnIconPress("-")}
style={LoanStyles.TopIconWrapper}>
<Entypo name="minus" size={24} color={Colors.PrimaryColor} />
</TouchableOpacity>

<TextInput 
value={String(requstLoanAmount)}
placeholder='₹ 0'
keyboardType='numeric'
placeholderTextColor={"white"}
keyboardAppearance='light'
onChangeText={(e)=>onSetLoanSmount(e)}
textAlign='center'
style={{color:Colors.FontColorI,fontSize:35,alignSelf:'center'}}
/>

<TouchableOpacity 
onPress={()=> OnIconPress("+")}

style={LoanStyles.TopIconWrapper}>
<Entypo name="plus" size={24} color={Colors.PrimaryColor} />
</TouchableOpacity>

        </View>

        <InputTitle 
        value={"Frequency"}
        style={{marginLeft:0}}
        />
        <View style={[GlobalStyles.RowMaker,{marginTop:10,justifyContent:"space-between",marginBottom:10}]}>
        <TouchableOpacity 
        onPress={()=> setPeriod(3)}
        style={[LoanStyles.ApplyButtonSmall,{
            backgroundColor:period === 3 ? Colors.deposit:Colors.inActive
        }]}>
<Text style={{color:"white"}}>
    3 months
</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={()=> setPeriod(6)}
        style={[LoanStyles.ApplyButtonSmall,{
            backgroundColor:period === 6 ? Colors.deposit:Colors.inActive
        }]}>
<Text style={{color:"white"}}>
    6 months
</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={()=> setPeriod(12)}
        style={[LoanStyles.ApplyButtonSmall,{
            backgroundColor:period === 12 ? Colors.deposit:Colors.inActive
        }]}>
<Text style={{color:"white"}}>
    12 months
</Text>
        </TouchableOpacity>

    

        </View>
        <TouchableOpacity
        style={LoanStyles.ApplyButton}
        >
 <Text style={{}}>
              Apply Now
            </Text>
        </TouchableOpacity>
        <Text style={{color:Colors.inActive,
            alignSelf:'center',
            marginTop:10
        }}>3000 will be charged per day after 40 days</Text>

</View>
<InputTitle 
value={"Unpaid Bills"}
style={{marginLeft:30,margin:10}}
/>

<Text style={{color:Colors.danger}}>Interest will be charged after 30 days "28 days Left"</Text>

<BillsCard 

title={"Full Payment"}
subtitle={"Pay full amount: "}
identifier={"Full"}
titleII={"Amount Left"}
LoanTaken={"192030"}
leftAmount="192030"
interest="0.3"

/>

<BillsCard 

title={"Partial Payment"}
subtitle={"Pay Installment of: "}
identifier={"Installment"}
titleII={"Amount Left"}
LoanTaken={"192030"}
leftAmount="1920"
interest="0.3"

/>
    </View>
  );
};


export default TakeLoanScreen;
