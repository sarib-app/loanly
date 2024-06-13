import React, { useState } from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import InputField from '../../Global/components/InputField';
import CustomButton from '../../Global/CustomButton';
import GlobalStyles from '../../Global/Branding/GlobalStyles';
import Colors from '../../Global/Branding/colors';
import InputTitle from '../../Global/components/InputTitle';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import PayBackStyles from './PayBack';
import Header from '../../Global/components/Header';
import { WindowWidth } from '../../Global/components/Dimensions';
import ImageUpload from '../../Global/components/ImageUpload';

const PayBackForm = ({ route }) => {
const {identifier} = route.params
const {leftAmount} = route.params

// console.log(identifier)
 
  const [AccountType, setAccountType] = useState('');
  const [ReturnAmount, setReturnAmount] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [invoice, setinvoice] = useState(null);

  const [isPressed, setIsPressed] = useState(false);

  

  const handleSubmit = () => {
    setIsPressed((prev) => !prev);
  };

  return (
    <View style={GlobalStyles.Container}>
      <Header name={"Give All Details"} />
      <ScrollView
      contentContainerStyle={{alignItems:'center',width:WindowWidth}}
      >

      <View style={[PayBackStyles.Card, GlobalStyles.RowMaker, { backgroundColor: Colors.PrimaryColor }]}>
        <FontAwesome name="warning" size={24} color={Colors.FontColorI} />
        <View style={{ alignItems: 'flex-start', marginLeft: 10 }}>
          <Text style={[PayBackStyles.CardTitle, { color: Colors.FontColorI }]}>
            Payment Return Policy
          </Text>
          <Text style={[PayBackStyles.CardDesc, { color: Colors.FontColorI }]}>
            Please pay your debt on our given account no. and send the proof of transaction below.
          </Text>
        </View>
      </View>



      <InputTitle value="Bank Type" />
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={AccountType}
          onValueChange={(itemValue) => setAccountType(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select Account Type" value="" />
          <Picker.Item label="UBL" value="UBL" />
          <Picker.Item label="Meezan" value="Meezan" />
          <Picker.Item label="Allied" value="Allied" />
        </Picker>
      </View>


      <InputTitle 
      value={"Invoice Screenshot"}
      />
      <ImageUpload 
    //   label={"dd"}
      onSelect={setinvoice}
      value={invoice}
      />

      <InputTitle value="Return Amount" />
      <InputField
        icon="cash-outline"
        placeholder="Monthly Income"
        value={leftAmount}
        editable={false}
        onChangeText={setReturnAmount}
        keyboardType="numeric"
        pressed={isPressed}
      />

      <InputTitle value="Transaction ID" />
      <InputField
        icon="card-outline"
        placeholder="Account Number"
        value={accountNumber}
        onChangeText={setAccountNumber}
        keyboardType="numeric"
        pressed={isPressed}
      />

      <CustomButton title="Pay Now" onPress={handleSubmit} />
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

export default PayBackForm;
