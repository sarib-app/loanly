

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text,
  View
  
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import GlobalStyles from '../Branding/GlobalStyles';
import { useIsFocused } from '@react-navigation/native';
// import YtSearchSuggestions from '../Search/YtSearchSuggestions';
function Header ({name}){
const navigation = useNavigation()
const focused = useIsFocused()

  return (
    <SafeAreaView style={GlobalStyles.Header}>
     
  
<Text
style={GlobalStyles.HeaderText}
>
  {name}
</Text>
      



     


    </SafeAreaView>
  );
};



export default Header;
