import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../Branding/colors';
import { WindowWidth } from './Dimensions';

const InputField = ({ icon, placeholder, secureTextEntry, keyboardType, value, onChangeText ,pressed}) => {
  return (
    <View style={[styles.container,{borderColor:pressed == true && !value ?Colors.danger:Colors.placeHolder }]}>
      <Ionicons name={icon} size={24} color={Colors.PrimaryColor} style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={Colors.placeHolder}
        keyboardType={keyboardType}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.placeHolder,
    borderRadius:10,
    backgroundColor:Colors.BgColorII,
    marginVertical: 10,
    padding:7,

    width:WindowWidth/1.03
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: Colors.FontColorI,
  },
});

export default InputField;
