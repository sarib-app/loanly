import {
    StyleSheet,
   Dimensions
  } from 'react-native'
// import { Divider } from 'react-native-paper';
import Colors from '../../Global/Branding/colors';
const WindowWidth = Dimensions.get('screen').width
  const WindowHeight = Dimensions.get('screen').height; 
  const HomeStyles = StyleSheet.create({ 
Card:{
    width:WindowWidth/1.05,
    height:WindowHeight/7,
    backgroundColor:Colors.Dark,
    borderRadius:10,
    elevation:10,
    shadowColor:Colors.Dark,
    padding:10
},
CardTitle:{
    fontWeight:'bold',
    fontSize:16,
    color:Colors.FontColorI
},
CardDesc:{
    fontWeight:'400',
    fontSize:14,
    color:Colors.FontColorI,
    width:"40%"
},
TopLoanCard:{
  width:WindowWidth,
  height:WindowHeight/3.7,
  paddingHorizontal:20,
  borderBottomLeftRadius:30,
  borderBottomEndRadius:30,
  backgroundColor:Colors.PrimaryColor
}

  })
  export default HomeStyles