import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../Branding/colors';

const InputTitle = ({ value }) => {
  return (
    <Text style={styles.TxtStyle}>
      {value}
    </Text>
  );
};

const styles = StyleSheet.create({
TxtStyle:{
  color:Colors.FontColorI,
  fontWeight:'bold',
  fontSize:16,
  alignSelf:'flex-start',
  marginLeft:10
}
});

export default InputTitle;
