import {
    StyleSheet,
   Dimensions
  } from 'react-native'
// import { Divider } from 'react-native-paper';
import Colors from '../../Global/Branding/colors';
const WindowWidth = Dimensions.get('screen').width
  const WindowHeight = Dimensions.get('screen').height; 
  const HomeStyles = StyleSheet.create({ 
tagsSection:{
    width:WindowWidth/1.1,
    // backgroundColor:"yellow"
},
tagsWrapper:{
    backgroundColor:Colors.inActive,
    shadowColor:Colors.black,
    // shadowRadius:2,
    shadowOpacity:1,
    elevation:1,
    paddingHorizontal:20,
    paddingVertical:5,
    borderRadius:20,
    margin:5
},
tagsText:{
    color:Colors.FontColorI
},
Tags_active:{
    backgroundColor:Colors.PrimaryColor,
    color:"blue"
},
tags_active_txt:{
    color:Colors.inActive
},
Image_cardStyle:{
width:WindowWidth/2.4,
height:200,
backgroundColor:Colors.inActive,
margin:5,
borderRadius:10,
}
  })
  export default HomeStyles