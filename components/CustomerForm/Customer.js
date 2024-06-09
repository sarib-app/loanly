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
import CustomerStyles from './CustomerStyles';
import Header from '../../Global/components/Header';
import { WindowWidth } from '../../Global/components/Dimensions';

const CustomerForm = ({ navigation }) => {
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

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || dateOfBirth;
    setShowDatePicker(Platform.OS === 'ios');
    setDateOfBirth(currentDate);
  };

  const handleSubmit = () => {
    setIsPressed((prev) => !prev);
  };

  return (
    <View style={GlobalStyles.Container}>
      <Header name={"Give All Details"} />
      <ScrollView
      contentContainerStyle={{alignItems:'center'}}
      >

      <View style={[CustomerStyles.Card, GlobalStyles.RowMaker, { backgroundColor: Colors.deposit }]}>
        <FontAwesome name="warning" size={24} color={Colors.FontColorI} />
        <View style={{ alignItems: 'flex-start', marginLeft: 10 }}>
          <Text style={[CustomerStyles.CardTitle, { color: Colors.FontColorI }]}>
            Please fill out the Loan application.
          </Text>
          <Text style={[CustomerStyles.CardDesc, { color: Colors.FontColorI }]}>
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
        pressed={isPressed}
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

      <CustomButton title="Submit Application" onPress={handleSubmit} />
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
