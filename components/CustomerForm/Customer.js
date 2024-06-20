import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import InputField from '../../Global/components/InputField';
import CustomButton from '../../Global/CustomButton';
import GlobalStyles from '../../Global/Branding/GlobalStyles';
import Colors from '../../Global/Branding/colors';
import InputTitle from '../../Global/components/InputTitle';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import CustomerStyles from './CustomerStyles';
import Header from '../../Global/components/Header';
import { WindowWidth } from '../../Global/components/Dimensions';
import ImageUpload from '../../Global/components/ImageUpload';
import { useNavigation } from '@react-navigation/native';
import LoadingModal from '../../Global/components/LoadingModal';
import getAsyncuser from '../../Global/components/getAsyncUser';

const CustomerForm = ({  }) => {
  const navigation = useNavigation()
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [address, setAddress] = useState('');
  const [employmentType, setEmploymentType] = useState('');
  const [monthlyIncome, setMonthlyIncome] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [isPressed, setIsPressed] = useState(false);
  const [loading, setLoading] = useState(false);

  const [AdharCard, setAdharCard] = useState(null);

  const [user, setuser] = useState(null);

  const [PanCard, setPanCard] = useState(null);
  const [selfie, setSelfie] = useState(null);
  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || dateOfBirth;
    setShowDatePicker(Platform.OS === 'ios');
    setDateOfBirth(currentDate);
  };

  const handleSubmit = () => {
    if(firstName && lastName  && dateOfBirth && address && monthlyIncome && accountNumber && employmentType && AdharCard && selfie && PanCard ){

      postRequest()
    }else{

      setIsPressed((prev) => !prev);
    }
  };



  const postRequest = async () => {
    setLoading(true)
    const formData = new FormData();
    formData.append('user_id', user.id);
    formData.append('first_name', firstName);
    formData.append('middle_name', middleName);
    formData.append('last_name', lastName);
    formData.append('dob', dateOfBirth.toISOString().split('T')[0]);
    formData.append('address', address);
    formData.append('monthly_income', monthlyIncome);
    formData.append('account_number', accountNumber);
    formData.append('employment_type', employmentType);

    if (AdharCard) {
      // const aadharFile = await FileSystem.getInfoAsync(aadharCard);
      formData.append('aadhar_card_photo', {
        uri: AdharCard,
        type: 'image/jpeg',
        name: 'aadhar_card_photo.jpg',
      });
    }

    if (PanCard) {
      // const panFile = await FileSystem.getInfoAsync(PanCard);
      formData.append('pan_card_photo', {
        uri: PanCard,
        type: 'image/jpeg',
        name: 'pan_card_photo.jpg',
      });
    }

    if (selfie) {
      // const selfieFile = await FileSystem.getInfoAsync(selfie);
      formData.append('selfie', {
        uri: selfie,
        type: 'image/jpeg',
        name: 'selfie.jpg',
      });
    }

    try {
      const response = await fetch('https://firstcredit.alphanitesofts.net/api/add_user_add', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const result = await response.json();
      if(result.status === "200"){
        Alert.alert("Success", result.message)
        navigation.goBack()
      }else if(result.status === "401"){
        Alert.alert("Error",result.message)
      }
      console.log(result);
    } catch (error) {
      Alert.alert("Error", "Something went wrong please try againn later")
      console.error('Error uploading files:', error);
    }
    finally{
      setLoading(false)
    }
  };













  useEffect(()=>{
      async function getAsyncData(){
      
      const userData = await getAsyncuser()
      if(userData){
        setuser(userData)
      }
      }
      getAsyncData()
        },[])


  return (
    <View style={[GlobalStyles.Container,{paddingBottom:50}]}>
      <Header name={"Give All Details"} />
      <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{alignItems:'center',width:WindowWidth}}
      >

      <View style={[CustomerStyles.Card, GlobalStyles.RowMaker, { backgroundColor: Colors.deposit }]}>
        <FontAwesome name="warning" size={24} color={Colors.BgColor} />
        <View style={{ alignItems: 'flex-start', marginLeft: 10 }}>
          <Text style={[CustomerStyles.CardTitle, { color: Colors.BgColor }]}>
            Please fill out the Loan application.
          </Text>
          <Text style={[CustomerStyles.CardDesc, { color: Colors.BgColor }]}>
            This is a one-time application submission, we will not ask you again for this information.
          </Text>
        </View>
      </View>

      <InputTitle value="First Name" />
      <InputField
        icon="call-outline"
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
        pressed={isPressed}
      />

      <InputTitle value="Middle Name (optional)" />
      <InputField
        icon="call-outline"
        placeholder="Middle Name"
        value={middleName}
        onChangeText={setMiddleName}
        pressed={false}
      />

      <InputTitle value="Last Name" />
      <InputField
        icon="call-outline"
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
        pressed={isPressed}
      />

      <InputTitle value="Date of Birth" />
      <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.datePicker}>
        <Text style={styles.dateText}>{dateOfBirth.toDateString()}</Text>
      </TouchableOpacity>
      {showDatePicker && (
        
        <DateTimePicker
          value={dateOfBirth}
          mode="date"
          display='calendar'
          onChange={handleDateChange}
          
        />
      )}

      <InputTitle value="Address" />
      <InputField
        icon="home-outline"
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
        pressed={isPressed}
      />

      <InputTitle value="Employment Type" />
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={employmentType}
          onValueChange={(itemValue) => setEmploymentType(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select Employment Type" value="" />
          <Picker.Item label="Government Employee" value="government" />
          <Picker.Item label="Private Employee" value="private" />
          <Picker.Item label="Business Holder" value="business" />
        </Picker>
      </View>

      <InputTitle value="Monthly Income" />
      <InputField
        icon="cash-outline"
        placeholder="Monthly Income"
        value={monthlyIncome}
        onChangeText={setMonthlyIncome}
        keyboardType="numeric"
        pressed={isPressed}
      />

      <InputTitle value="Account Number" />
      <InputField
        icon="card-outline"
        placeholder="Account Number"
        value={accountNumber}
        onChangeText={setAccountNumber}
        keyboardType="numeric"
        pressed={isPressed}
      />



      <InputTitle 
      value={"Adhar Card"}
      />
      <ImageUpload 
    //   label={"dd"}
      onSelect={setAdharCard}
      value={AdharCard}
      />
     <InputTitle 
      value={"PAN Card"}
      />
      <ImageUpload 
    //   label={"dd"}
      onSelect={setPanCard}
      value={PanCard}
      />
       <InputTitle 
      value={"Upload Selfie"}
      />
      <ImageUpload 
    //   label={"dd"}
      onSelect={setSelfie}
      value={selfie}
      />

      <CustomButton title="Submit Application" onPress={handleSubmit} />
      <LoadingModal 
      show={loading}
      />
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  datePicker: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginVertical: 10,
  },
  dateText: {
    fontSize: 16,
    color: '#333',
  },
  pickerContainer: {
    width: WindowWidth/1.05,
    backgroundColor: Colors.BgColorII,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.inActive,
    marginVertical: 10,
  },
  picker: {
    width: WindowWidth/1.05,
    height: 50,
    color:Colors.FontColorI
  },
});

export default CustomerForm;
