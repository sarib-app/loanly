import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import GlobalStyles from '../../Global/Branding/GlobalStyles';

import HomeStyles from './HomeStyles';
import { Entypo, FontAwesome, FontAwesome6, Ionicons, Octicons } from '@expo/vector-icons';
import Colors from '../../Global/Branding/colors';
import { useNavigation } from '@react-navigation/native';
import { WindowWidth } from '../../Global/components/Dimensions';
import InputTitle from '../../Global/components/InputTitle';
const DashboardScreen = ({loanTaken,loanRec,depositRec}) => {
  const navigation = useNavigation()




  function LoanRecordCard({
    title,
    subtitle,
    identifier,
    titleII,
    route,
    amount,
    interest
  }) {
    function RowRecord({
        value, title,
        style
      }) {
        return (
    
    
    
    
          <View style={[style,{alignItems:'center'}]}>
    
            <Text style={[HomeStyles.CardTitle]}>
              {Number(value).toFixed(0)}
            </Text>
            <Text style={[HomeStyles.CardDesc, { width: "100%", fontWeight: '100' }]}>
              {title}
            </Text>
          </View>
    
    
        )
      }
    

    return (
      <View style={HomeStyles.Card}>
        <View style={GlobalStyles.RowMaker}>

          <View style={{ padding: 10, borderRadius: 1000, backgroundColor: Colors.inActive }}>
            {
              identifier === "Loan"?
              <Entypo name="credit-card" size={24} color={Colors.PrimaryColor} />:
              <FontAwesome6 name="money-bill-trend-up" size={24}  color={Colors.SeconderyColor} />
            }
          </View>
          <View style={{ marginLeft: 10 }}>

            <Text style={[HomeStyles.CardTitle]}>
              {title}
            </Text>
            <Text style={[HomeStyles.CardDesc, { width: "100%", fontWeight: '100' }]}>
              {subtitle}
            </Text>
          </View>
        </View>
        <View style={[GlobalStyles.RowMaker, { marginTop: 20, justifyContent: 'space-between' }]}>
          <RowRecord
            value={amount}
            title={titleII}

          />
    
          <RowRecord
            value={interest}
            title={"Total Interest"}
          // style={{marginLeft:20}}
          />

          <TouchableOpacity 
        onPress={()=> navigation.navigate(route)}
        style={HomeStyles.ApplyButtonSmall}>
            <Text style={{ fontSize: 12, color: Colors.FontColorI }}>
              See History
            </Text>
          </TouchableOpacity>



        </View>



      </View>
    )
  }
  return (
    <>
 
      <View
        style={HomeStyles.TopLoanCard}
      >
<View style={[GlobalStyles.RowMaker,{justifyContent:'space-between'}]}>
<View style={{alignItems:'flex-start'}}>

        <Text style={{ color: Colors.inActive }}>
          Maximum Amount
        </Text>
        <Text style={HomeStyles.TopCardTitle}>
        ₹ 50,0000
        </Text>
        </View>
        <TouchableOpacity
        onPress={()=> navigation.navigate("Notifications")}
        >
        <Ionicons name="notifications-sharp" size={28} color="black" />
        <Entypo name="dot-single" size={44} color={Colors.deposit} style={{marginTop:-30,marginLeft:-20}}/>
        </TouchableOpacity>
        </View>

        <View
          style={{ flexDirection: 'row', alignItems: 'center' }}
        >

          <Octicons name="dot-fill" size={24} color={Colors.deposit} />
          <View style={{ width: WindowWidth / 2.5, borderWidth: 1, borderColor:  loanTaken === "NA" ?Colors.inActive:Colors.deposit }} />
          <Octicons name="dot-fill" size={24} color={ loanTaken === "NA" ?Colors.inActive:Colors.deposit } />
          <View style={{ width: WindowWidth / 2.5, borderWidth: 1, borderColor:  loanTaken === "NA" || loanTaken === "pending" ?Colors.inActive:Colors.deposit  }} />
          <Octicons name="dot-fill" size={24} color={loanTaken === "NA" || loanTaken === "pending" ?Colors.inActive:Colors.deposit} />

        </View>





        <View
          style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
        >

          <Text style={{ color: Colors.BgColor, fontWeight: 'bold' }}>
            Apply
          </Text>
          <Text style={{ color: Colors.inActive, fontWeight: 'bold' }}>
            Review
          </Text>
          <Text style={{ color: Colors.inActive, fontWeight: 'bold' }}>
            Grant
          </Text>

        </View>
        <TouchableOpacity 
        onPress={()=>{
          navigation.navigate("TakeLoanScreen")

          if(loanTaken === "pending"){
            
            Alert.alert("Wait","Please keep patience our team is reviewing your loan request, it will be approved soon.")
          }else{

            navigation.navigate("TakeLoanScreen")
          }
        }}
        // onPress={()=> navigation.navigate("CustomerForm")}

        style={HomeStyles.ApplyButton}>
          <Text>
            {loanTaken === "pending"?"In review":"Apply Now"}
          </Text>
        </TouchableOpacity>

      </View>
      <InputTitle
        value={"Your History"}
        style={{ margin: 10 }}
      />
      <LoanRecordCard
        title={"Loan Taken"}
        subtitle={"Loan history is available here"}
        identifier={"Loan"}
        titleII={"Total Loan"}
        route={"LoanHistoryScreen"}
        amount={loanRec?.total_loan_taken || "--"}
        interest={loanRec?.total_interest_applied || "--"}
      />

      <InputTitle
        value={"Your History"}
        style={{ margin: 10 }}
      />
      <LoanRecordCard
        title={"Loan Return"}
        subtitle={"Loan return record is here"}
        identifier={"Return"}
        titleII={"Total Return"}
        route={"DepositHistoryScreen"}
        amount={depositRec?.total_deposited }
        interest={depositRec?.total_interest_given }


      />
   </>
  );
};


export default DashboardScreen;


















// function LoanRecordCard({
//     title,
//     subtitle,
//     identifier,
//     titleII
//   }) {
//     function RowRecord({
//         value, title,
//         style
//       }) {
//         return (
    
    
    
    
//           <View style={[style,{alignItems:'center'}]}>
    
//             <Text style={[HomeStyles.CardTitle]}>
//               {value}
//             </Text>
//             <Text style={[HomeStyles.CardDesc, { width: "100%", fontWeight: '100' }]}>
//               {title}
//             </Text>
//           </View>
    
    
//         )
//       }
    

//     return (
//       <View style={HomeStyles.Card}>
//         <View style={GlobalStyles.RowMaker}>

//           <View style={{ padding: 10, borderRadius: 1000, backgroundColor: Colors.inActive }}>
//             {
//               identifier === "Loan"?
//               <Entypo name="credit-card" size={24} color={Colors.PrimaryColor} />:
//               <FontAwesome6 name="money-bill-trend-up" size={24}  color={Colors.SeconderyColor} />
//             }
//           </View>
//           <View style={{ marginLeft: 10 }}>

//             <Text style={[HomeStyles.CardTitle]}>
//               {title}
//             </Text>
//             <Text style={[HomeStyles.CardDesc, { width: "100%", fontWeight: '100' }]}>
//               {subtitle}
//             </Text>
//           </View>
//         </View>
//         <View style={[GlobalStyles.RowMaker, { marginTop: 20, justifyContent: 'space-between' }]}>
//           <RowRecord
//             value={"₹ 1920000"}
//             title={titleII}

//           />

//           <RowRecord
//             value={"0.3%"}
//             title={"Total Interest"}
//           // style={{marginLeft:20}}
//           />

//           <View style={HomeStyles.ApplyButtonSmall}>
//             <Text style={{ fontSize: 12, color: Colors.FontColorI }}>
//               See History
//             </Text>
//           </View>



//         </View>



//       </View>
//     )
//   }