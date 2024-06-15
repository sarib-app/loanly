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








async function userDasboardStats(uid){
console.log(uid)
  const formdata = new FormData();
  formdata.append("user_id", uid);

  const requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow"
  }

try{

  const response = await fetch(`${BaseUrl}user-loan-record`,requestOptions)
  const result = await response.json()
 
  return result

}
catch(e){
  console.log(e)
Alert.alert("Error","Somethig Went Wrong, Try again later")
return null

}

}




async function ApplyLoan(uid,amount,duration){

  const formdata = new FormData();
  formdata.append("user_id", uid);
  formdata.append("loan_amount", amount);
  formdata.append("duration", duration);
  
  const requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow"
  };

try{

  const response = await fetch(`${BaseUrl}applyLoan`,requestOptions)
  const result = await response.json()
 
  return result

}
catch(e){
  console.log(e)
Alert.alert("Error","Somethig Went Wrong, Try again later")
return null

}

}









async function ReturnAmountApi(uid,l_id,amount,transaction_id,amount_paid,pay_type){

  const formdata = new FormData();
formdata.append("user_id", uid);
formdata.append("loan_id", l_id);
formdata.append("loan_amount", amount);
formdata.append("transaction_id",transaction_id);
formdata.append("amount_paid", amount_paid);
formdata.append("amount_paid_type", pay_type);

const requestOptions = {
  method: "POST",
  body: formdata,
  redirect: "follow"
};

try{

  const response = await fetch(`${BaseUrl}submit-transaction`,requestOptions)
  const result = await response.json()
 
  return result

}
catch(e){
  console.log(e)
Alert.alert("Error","Somethig Went Wrong, Try again later")
return null

}

}










async function getLoanList(uid){
  const requestOptions = {
    method: "GET",
    redirect: "follow"
  };
  
  try{
  
    const response = await fetch(`${BaseUrl}loans-by-user/${uid}`,requestOptions)
    const result = await response.json()
   
    return result
  
  }
  catch(e){
    console.log(e)
  Alert.alert("Error","Somethig Went Wrong, Try again later")
  return null
  
  }
  
  }



  async function getDepositList(uid){
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
    
    try{
    
      const response = await fetch(`${BaseUrl}transactions/${uid}`,requestOptions)
      const result = await response.json()
     
      return result
    
    }
    catch(e){
      console.log(e)
    Alert.alert("Error","Somethig Went Wrong, Try again later")
    return null
    
    }
    
    }
  
  





    async function getNotifications(uid){
      const requestOptions = {
        method: "GET",
        redirect: "follow"
      };
      
      try{
      
        const response = await fetch(`${BaseUrl}notifications/${uid}`,requestOptions)
        const result = await response.json()
       
        return result
      
      }
      catch(e){
        console.log(e)
      Alert.alert("Error","Somethig Went Wrong, Try again later")
      return null
      
      }
      
      }



      async function getUserData(uid){
        const formdata = new FormData();
        formdata.append("user_id", uid);
        
        const requestOptions = {
          method: "POST",
          body: formdata,
          redirect: "follow"
        };
        
        try{
        
          const response = await fetch(`${BaseUrl}user-data`,requestOptions)
          const result = await response.json()
         
          return result
        
        }
        catch(e){
          console.log(e)
        Alert.alert("Error","Somethig Went Wrong, Try again later")
        return null
        
        }
        
        }


export {
  Login_Call,
  RegisterCall,
  userDasboardStats,
  ApplyLoan,
  ReturnAmountApi,
  getLoanList,
  getDepositList,
  getNotifications,
  getUserData
}