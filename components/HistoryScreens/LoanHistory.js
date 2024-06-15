import React, { useEffect, useRef, useState } from "react";
import GlobalStyles from "../../Global/Branding/GlobalStyles";
import HeaderScreens from "../../Global/components/HeaderScreens";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../Global/Branding/colors";
import InputTitle from "../../Global/components/InputTitle";
import HistoryStyles from "./HistoryStyle";
import { FlatList } from "react-native-gesture-handler";
import Header from "../../Global/components/Header";
import getAsyncuser from "../../Global/components/getAsyncUser";
import { useIsFocused } from "@react-navigation/native";
import { getLoanList } from "../../Global/Calls/ApiCalls";
import AnimatedLottieView from "lottie-react-native";
import Nodata from '../../assets/Animationn/Nodata.json'

import moment from "moment";
import InitialLoading from "../../Global/components/InitialLoading";
import NodataFound from "../../Global/components/NoDataFound";
function LoanHistoryScreen(){
    const data =[
        {
        LoanAmount:"2000",
        InterestperDay:"3.0",
        status:"approved",
        Duration:"3/6/12",
        isCompleted:true,
        repayAmountLeft:2000,
        Aamount_rePaid: 1000
        },
        {
            LoanAmount:"2000",
            InterestperDay:"3.0",
            status:"rejected",
            Duration:"3/6/12",
            isCompleted:true,
            repayAmountLeft:2000,
            Aamount_rePaid: 1000
            },
            {
                LoanAmount:"2000",
                InterestperDay:"3.0",
                status:"pending",
                Duration:"3/6/12",
                isCompleted:true,
                repayAmountLeft:2000,
                Aamount_rePaid: 1000
                },
                {
                    LoanAmount:"2000",
                    InterestperDay:"3.0",
                    status:"pending",
                    Duration:"3/6/12",
                    isCompleted:true,
                    repayAmountLeft:2000,
                    Aamount_rePaid: 1000
                    },
        ]
        const focused = useIsFocused()
const [loanList,setLoanList] =useState([])

const [loading,setLoading] =useState(true)


const animation = useRef()




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
    const res= await getLoanList(userData.id)
    console.log(res)
    if(res != null){
     if(res.status === "200"){
        setLoanList(res.loans)
        
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
            

        <View style={GlobalStyles.ColumnAligner}>
            <InputTitle
            value={"Loan "+item.status}
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
            value={moment(item.loan_date).format("YYYY-MM-DD")}
            style={{marginLeft:0}}
            />
            <Text style={CardDesc}>
                Date
            </Text>
        </View>

        <View style={[GlobalStyles.ColumnAligner,{marginTop:10}]}>
            <InputTitle
            value={item.status}
            style={{marginLeft:0,color: item.status === "rejected"?Colors.danger:item.status ==="pending"?Colors.deposit:Colors.send}}
            />
            <Text style={CardDesc}>
            status
            </Text>
        </View>

        <View style={[GlobalStyles.ColumnAligner,{marginTop:10}]}>
            <InputTitle
            value={`${item.duration/30} months`}
            style={{marginLeft:0}}
            />
            <Text style={CardDesc}>
                Duration
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
            name={"Loan History"}
            />


            {
                loading === true?
                <InitialLoading />:
                <>

                {
                    loanList.length > 0 ?

<FlatList 
data={loanList}
renderItem={renderitems}
/>:
<NodataFound/>
                }

</>

            }
       
        </View>
    )
}
export default LoanHistoryScreen






{/* <View style={GlobalStyles.HistoryCard}>

<View style={GlobalStyles.RowMaker}>
    <View style={HistoryStyles.iconWrapper}>
<Ionicons name="cash" size={24} color="black" />


    </View>
    

<View style={GlobalStyles.ColumnAligner}>
    <InputTitle
    value={"Loan Apporved"}
    style={{marginLeft:0}}
    />
    <Text style={{color:"rgba(255,255,255,0.5)"}}>
        Loan Amount: 19000
    </Text>
</View>


</View>
<View style={[GlobalStyles.RowMaker,{justifyContent:'space-between'}]}>

<View style={[GlobalStyles.ColumnAligner,{marginTop:10}]}>
    <InputTitle
    value={"20-30-20"}
    style={{marginLeft:0}}
    />
    <Text style={{color:"rgba(255,255,255,0.5)"}}>
        Date
    </Text>
</View>

<View style={[GlobalStyles.ColumnAligner,{marginTop:10}]}>
    <InputTitle
    value={"Approved"}
    style={{marginLeft:0,color:Colors.send}}
    />
    <Text style={{color:"rgba(255,255,255,0.5)"}}>
    status
    </Text>
</View>

<View style={[GlobalStyles.ColumnAligner,{marginTop:10}]}>
    <InputTitle
    value={"3 Months"}
    style={{marginLeft:0}}
    />
    <Text style={{color:"rgba(255,255,255,0.5)"}}>
        Duration
    </Text>
</View>
</View>

</View> */}