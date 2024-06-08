import React from "react";
import GlobalStyles from "../../Global/Branding/GlobalStyles";
import HeaderScreens from "../../Global/components/HeaderScreens";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../Global/Branding/colors";
import InputTitle from "../../Global/components/InputTitle";
import HistoryStyles from "./HistoryStyle";
import { FlatList } from "react-native-gesture-handler";
import Header from "../../Global/components/Header";
function DepositHistoryScreen(){
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
            <Text style={{color:"rgba(255,255,255,0.5)"}}>
                Loan Amount: {item.LoanAmount}
            </Text>
        </View>

        
        </View>
        <View style={[GlobalStyles.RowMaker,{justifyContent:'space-between'}]}>

        <View style={[GlobalStyles.ColumnAligner,{marginTop:10}]}>
            <InputTitle
            value={"Installment"}
            style={{marginLeft:0}}
            />
            <Text style={{color:"rgba(255,255,255,0.5)"}}>
                Type
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
            value={"30000"}
            style={{marginLeft:0}}
            />
            <Text style={{color:"rgba(255,255,255,0.5)"}}>
                Bill Left
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
            name={"Deposit History"}
            />
<FlatList 
data={data}
renderItem={renderitems}
/>
       
        </View>
    )
}
export default DepositHistoryScreen


