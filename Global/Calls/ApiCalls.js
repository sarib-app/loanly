import AsyncStorage from "@react-native-async-storage/async-storage";

const BaseUrl = "https://firstcredit.alphanitesofts.net/api/"
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
async function Login_Call(phone,password){

const formdata = new FormData();
formdata.append("phone", phone);
formdata.append("password", password);

const requestOptions = {
  method: "POST",
  body: formdata,
  redirect: "follow"
};

try{

    const response = await fetch(`${BaseUrl}login`,requestOptions)
    const result = await response.json()
   
    return result

}
catch{
Alert.alert("Error","Somethig Went Wrong, Try again later")
return null

}

}



async function RegisterCall(phone,password,email,name){

    const formdata = new FormData();
    formdata.append("phone", phone);
    formdata.append("password", password);
    formdata.append("password_confirmation", password);
    formdata.append("email", email);
    formdata.append("name", name);
    
    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow"
    };
    

try{

    const response = await fetch(`${BaseUrl}register`,requestOptions)
    const result = await response.json()
   
    return result

}
catch(e){
    console.log(e)
Alert.alert("Error","Somethig Went Wrong, Try again later")
return null

}

}


export {Login_Call,RegisterCall}