import {
    StyleSheet,
   Dimensions
  } from 'react-native'
// import { Divider } from 'react-native-paper';
import Colors from '../../Global/Branding/colors';
const WindowWidth = Dimensions.get('screen').width
  const WindowHeight = Dimensions.get('screen').height; 
  const HistoryStyles = StyleSheet.create({ 
iconWrapper:{borderRadius:1000,backgroundColor:Colors.inActive,padding:10},


  })
  export default HistoryStyles