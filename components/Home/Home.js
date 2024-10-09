import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import GlobalStyles from '../../Global/Branding/GlobalStyles';
import Header from '../../Global/components/Header';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import HomeStyles from './HomeStyles';
import tags from '../../Global/Jsons/Tags';
import data from '../../Global/Jsons/Collection';
import ImageList from './ImageLIst';
import NodataFound from '../../Global/components/NoDataFound';

const HomeScreen = () => {
  const navigation = useNavigation()
  const focused = useIsFocused()
  const [selected,setSelected]=useState("All")

const filteredDAta = selected === "All" ? data : data.filter((item)=> item.tag.includes(selected))

  useEffect(()=>{
   
        },[focused])

 
function Tags_list({item}){
  return(
    <TouchableOpacity 
    onPress={()=> setSelected(item.name)}
    style={[HomeStyles.tagsWrapper,selected === item.name && HomeStyles.Tags_active]}>
<Text style={[HomeStyles.tagsText,selected === item.name && HomeStyles.tags_active_txt]}>
  {item.name}
</Text>
    </TouchableOpacity>
  )
}

  return (
    <View style={GlobalStyles.Container}>
      <Header
        name={"Home"}
      />

      <View style={HomeStyles.tagsSection}> 
<FlatList
data={tags}
horizontal={true}
showsHorizontalScrollIndicator={false}
renderItem={({item})=>{
  return(
<Tags_list
item={item}
/>
  )
}}
/>


      </View>





{/*Image listing data*/}
  {/* <View> */}
{
  filteredDAta.length > 0 ?

<FlatList
data={filteredDAta}
numColumns={2}
renderItem={({item})=>{
  return(

 <ImageList
 item={item}
 />
)

}}
/>:
<NodataFound/>
}

{/* </View> */}






    </View>
  );
};


export default HomeScreen;
