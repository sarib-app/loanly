import React, { useEffect, useState } from "react";
import GlobalStyles from "../../Global/Branding/GlobalStyles";
import HeaderScreens from "../../Global/components/HeaderScreens";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../Global/Branding/colors";
import InputTitle from "../../Global/components/InputTitle";
import HistoryStyles from "./HistoryStyle";
import { FlatList } from "react-native-gesture-handler";
import Header from "../../Global/components/Header";
import { useIsFocused } from "@react-navigation/native";
import getAsyncuser from "../../Global/components/getAsyncUser";
import { getDepositList } from "../../Global/Calls/ApiCalls";
import NodataFound from "../../Global/components/NoDataFound";
import InitialLoading from "../../Global/components/InitialLoading";
function DepositHistoryScreen(){
   








    const focused = useIsFocused()
    const [depositList,setdepositList] =useState([])
    
    const [loading,setLoading] =useState(true)
    
    
    
    
    
    
            useEffect(()=>{
                async function getAsyncData(){
                
                const userData = await getAsyncuser()
                if(userData){
                    getLoansAll(userData)
                }
                }
                getAsyncData()
                  },[focused])
    
    
    async function getLoansAll(userData){
        const res= await getDepositList(userData.id)
        console.log(res)
        if(res != null){
         if(res.status === "200"){
            setdepositList(res.transactions)
            
         }
     setLoading(false)
        }
    }
    



    const CardDesc={
        fontWeight:'600',
          fontSize:12,
          color:Colors.placeHolder,
        //   width:"40%",
      }
    
    const renderitems = ({item})=>(

        <View style={GlobalStyles.HistoryCard}>

        <View style={GlobalStyles.RowMaker}>
            <View style={HistoryStyles.iconWrapper}>
        <Ionicons name="cash" size={24} color="black" />


            </View>
            

        <View style={[GlobalStyles.ColumnAligner,{alignItems:'flex-start'}]}>
            <InputTitle
            value={"Loan Repaid Rejected"}
            style={{marginLeft:0}}
            />
            <Text style={CardDesc}>
                Loan Amount: {item.loan_amount}
            </Text>
        </View>

        
        </View>
        <View style={[GlobalStyles.RowMaker,{justifyContent:'space-between'}]}>

        <View style={[GlobalStyles.ColumnAligner,{marginTop:10}]}>
            <InputTitle
            value={item?.amount_paid_type || "installment"}
            style={{marginLeft:0}}
            />
            <Text style={CardDesc}>
                Type
            </Text>
        </View>

        <View style={[GlobalStyles.ColumnAligner,{marginTop:10}]}>
            <InputTitle
            value={item?.status}
            style={{marginLeft:0,color: item.status === "rejected"?Colors.danger:item.status ==="pending"?Colors.deposit:Colors.send}}
            />
            <Text style={CardDesc}>
            status
            </Text>
        </View>

        <View style={[GlobalStyles.ColumnAligner,{marginTop:10}]}>
            <InputTitle
            value={item?.amount_paid || 0}
            style={{marginLeft:0,alignSelf:"center"}}
            />
            <Text style={CardDesc}>
                Bill Paid
            </Text>
        </View>
        </View>

    </View>

    )
    return(
        <View
        style={GlobalStyles.Container}
        >
            <Header 
            name={"Return History"}
            />


            {
                loading === true?
                <   InitialLoading />:
                <>

                {
                    depositList.length > 0 ?

<FlatList 
data={depositList}
renderItem={renderitems}
/>:
<NodataFound/>
                }

</>

            }
       
        </View>
    )
}
export default DepositHistoryScreen


