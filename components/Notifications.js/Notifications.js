import React from "react";
import GlobalStyles from "../../Global/Branding/GlobalStyles";
import HeaderScreens from "../../Global/components/HeaderScreens";
import { Text, View } from "react-native";
import { Entypo, Ionicons } from "@expo/vector-icons";
import Colors from "../../Global/Branding/colors";
import InputTitle from "../../Global/components/InputTitle";
import NotifiactionStyles from "./NotificationStyles";
import { FlatList } from "react-native-gesture-handler";
import Header from "../../Global/components/Header";
function Notifications(){
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
            <View style={NotifiactionStyles.iconWrapper}>
            <Entypo name="dot-single" size={24} color="black" />


            </View>
            

        <View style={[GlobalStyles.ColumnAligner,{alignItems:'flex-start'}]}>
            <InputTitle
            value={"Payment Approved"}
            style={{marginLeft:0}}
            />
            <Text style={{color:"rgba(255,255,255,0.5)",width:"40%"}}>
                Your recent request for loan request has been approved please check your dashboard for update
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
            name={"Notifications"}
            />
<FlatList 
data={data}
renderItem={renderitems}
/>
       
        </View>
    )
}
export default Notifications


