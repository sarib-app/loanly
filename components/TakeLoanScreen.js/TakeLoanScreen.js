import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert ,TextInput} from 'react-native';
import GlobalStyles from '../../Global/Branding/GlobalStyles';
import Header from '../../Global/components/Header';
import LoanStyles from './LoanStyles';
import Colors from '../../Global/Branding/colors';
import { Entypo } from '@expo/vector-icons';
import InputField from '../../Global/components/InputField';
import InputTitle from '../../Global/components/InputTitle';
import BillsCard from './BillsCard';
import { ApplyLoan, userDasboardStats } from '../../Global/Calls/ApiCalls';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import LoadingModal from '../../Global/components/LoadingModal';
import InitialLoading from '../../Global/components/InitialLoading';
import getAsyncuser from '../../Global/components/getAsyncUser';



const TakeLoanScreen = () => {
  const navigation = useNavigation()
  const focused= useIsFocused()
 const [requstLoanAmount,setRequestLoanAmount]=useState("")
 const [period,setPeriod]=useState(3)
 const [loading,setLoading]=useState(false)
 const [InittialLoaderState,setInittialLoaderState]=useState(true)

 const [loanTaken,setLoanTaken] = useState("NA")

 const [loanRec,setLoanrec] = useState(null)





 const [user, setuser] = useState(null);

    useEffect(()=>{
        async function getAsyncData(){
        
        const userData = await getAsyncuser()
        if(userData){
          setuser(userData)
          getDashboardData(userData)
        }
        
        }
        getAsyncData()
          },[focused])


          async function getDashboardData(userData){
            const res= await userDasboardStats(userData.id)
            console.log(res)
          if(res != null){
          setLoanTaken(res.response.user_record.loan_applied)
          setLoanrec(res.response.Active_Loan_Data)
          
          }
          setInittialLoaderState(false)
          }




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

 async function onApplyLoan(){
setLoading(true)
if(!requstLoanAmount,!period){
    return
}
const duration = period*30

  const res = await ApplyLoan(user.id,requstLoanAmount,duration)
  console.log(res)
  if(res){
if(res === "200"){
    Alert.alert("Congratulations","You have successfully obtained loan!")
    navigation.goBack()
    setLoading(false)
}
else{
    Alert.alert("Failed",res.message)

    setLoading(false)
}
  }
 }

  return (
    <View style={GlobalStyles.Container}>
      <Header
        name={"Loan Screen"}
        // color={Colors.PrimaryColor}
      />


{

    InittialLoaderState ?
    <InitialLoading />
:
<>
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
placeholderTextColor={Colors.FontColorI}
keyboardAppearance='light'
cursorColor={Colors.PrimaryColor}
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
            backgroundColor:period === 3 ? Colors.deposit:Colors.BgColorII
        }]}>
<Text style={{color:period === 3 ? Colors.BgColor:Colors.placeHolder}}>
    3 months
</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={()=> setPeriod(6)}
        style={[LoanStyles.ApplyButtonSmall,{
            backgroundColor:period === 6 ? Colors.deposit:Colors.BgColorII
        }]}>
<Text style={{color:period === 6 ? Colors.BgColor:Colors.placeHolder}}>
    6 months
</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={()=> setPeriod(12)}
        style={[LoanStyles.ApplyButtonSmall,{
            backgroundColor:period === 12 ? Colors.deposit:Colors.BgColorII
        }]}>
<Text style={{color:period === 12 ? Colors.BgColor:Colors.placeHolder}}>
    12 months
</Text>
        </TouchableOpacity>

    

        </View>

        {
            loanTaken == "NA"&&
        <TouchableOpacity
        style={[LoanStyles.ApplyButton]}
        onPress={()=> {
            
            if(requstLoanAmount){
                onApplyLoan()

            }else{
                Alert.alert("Sorry","Please enter an amount to take loan")
            }
        
        
        }}
        >
 <Text style={{color:Colors.BgColor}}>
              Apply Now
            </Text>
        </TouchableOpacity>
        }

{
    loanTaken !="NA"?

    <Text style={{color:Colors.danger,fontSize:12,fontWeight:'600',alignSelf:'center',textAlign:"center"
    }}>You already have pending or approved loan request</Text>
    :
    <Text style={{color:Colors.danger,fontSize:12,fontWeight:'600',alignSelf:'center',textAlign:"center"
    }}>3000 will be charged per day after 40 days</Text>
}

      

</View>
<InputTitle 
value={"Unpaid Bills"}
style={{marginLeft:30,margin:10,marginBottom:0,fontSize:16}}
/>

{/* <Text style={{color:Colors.danger,fontSize:12,fontWeight:'600'}}>Interest will be charged after 30 days "28 days Left"</Text> */}

<BillsCard 

title={"Full Payment"}
subtitle={"Pay full amount: "}
identifier={"Full"}
titleII={"Amount Left"}
LoanTaken={loanRec?.active_loan_amount || 0}
leftAmount={loanRec?.pending_amount || 0}
interest={loanRec?.active_interest_applied || 0}
loanStat={loanTaken}


/>

<BillsCard 

title={"Partial Payment"}
subtitle={"Pay Installment of: "}
identifier={"Installment"}
titleII={"Amount Paid"}
LoanTaken={loanRec?.active_loan_amount || 0 }
leftAmount={loanRec?.paid_amount || 0}
interest={loanRec?.active_interest_applied || 0 }
loanStat={loanTaken}


/>
</>
}
<LoadingModal 
show={loading}
/>

    </View>
  );
};


export default TakeLoanScreen;
