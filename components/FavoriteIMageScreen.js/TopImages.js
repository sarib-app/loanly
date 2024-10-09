import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Dimensions, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImageList from '../Home/ImageLIst';
import data from '../../Global/Jsons/Collection';
import HomeStyles from '../Home/HomeStyles';
import GlobalStyles from '../../Global/Branding/GlobalStyles';
import Header from '../../Global/components/Header';
const WindowWidth = Dimensions.get('window').width;

const TopImages = ({ navigation }) => {
  const [favourites, setFavourites] = useState([]);

;

  return (
    <View style={GlobalStyles.Container}>
        <Header
        name={"Top 6 🔥"}
      />
      {data.length > 0 ? (
        <FlatList
          data={data.filter((item)=>item.our_choice === true)}
          numColumns={2}
          renderItem={({ item }) => <ImageList item={item} />}
          keyExtractor={item => item.id.toString()}
        />
      ) : (
        <Text style={styles.noFavouritesText}>No favourite images found.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  noFavouritesText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default TopImages;
