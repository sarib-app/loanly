import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import HomeStyles from './HomeStyles';
import { useNavigation } from '@react-navigation/native';
import data from '../../Global/Jsons/Collection';
const ImageList = ({item}) => {

    const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
    const navigation = useNavigation();

    useEffect(() => {
      Image.getSize(item.image, (width, height) => {
        setImageSize({ width, height });
      });
    }, [item.image]);
    const relatedImage = data
  return (
    <TouchableOpacity style={[HomeStyles.Image_cardStyle]}
    onPress={() => navigation.navigate('ImageDetailScreen', { item, relatedImage })}

    >
      <Image
        source={{ uri: item.image }}
        style={[HomeStyles.Image_cardStyle,{margin:0}]}
      />
    </TouchableOpacity>
  );
};


export default ImageList;
