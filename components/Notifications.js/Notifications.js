import React, { useEffect, useState } from "react";
import GlobalStyles from "../../Global/Branding/GlobalStyles";
import HeaderScreens from "../../Global/components/HeaderScreens";
import { Text, View } from "react-native";
import { Entypo, Ionicons } from "@expo/vector-icons";
import Colors from "../../Global/Branding/colors";
import InputTitle from "../../Global/components/InputTitle";
import NotifiactionStyles from "./NotificationStyles";
import { FlatList } from "react-native-gesture-handler";
import Header from "../../Global/components/Header";
import { useIsFocused } from "@react-navigation/native";
import { getNotifications } from "../../Global/Calls/ApiCalls";
import getAsyncuser from "../../Global/components/getAsyncUser";
import InitialLoading from "../../Global/components/InitialLoading";
import NodataFound from "../../Global/components/NoDataFound";
function Notifications(){
  



    const focused = useIsFocused()
    const [notifList,setnotifList] =useState([])
    
    const [loading,setLoading] =useState(true)
    
    
    
    
    
    
            useEffect(()=>{
                async function getAsyncData(){
                
                const userData = await getAsyncuser()
                if(userData){
                    getNotifs(userData)
                }
                }
                getAsyncData()
                  },[focused])
    
    
    async function getNotifs(userData){
        const res= await getNotifications(userData.id)
        console.log(res)
        if(res != null){
         if(res.status === "200"){
            setnotifList(res.notifications)
            
         }
     setLoading(false)
        }
    }
    






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


            {
                loading === true?
                <InitialLoading />:
                <>

                {
                    notifList.length > 0 ?

<FlatList 
data={notifList}
renderItem={renderitems}
/>:
<NodataFound/>
                }

</>

            }
       
        </View>
    )
}
export default Notifications


