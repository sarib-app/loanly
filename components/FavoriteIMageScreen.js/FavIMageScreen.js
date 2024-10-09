import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Dimensions, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImageList from '../Home/ImageLIst';
import data from '../../Global/Jsons/Collection';
import HomeStyles from '../Home/HomeStyles';
import GlobalStyles from '../../Global/Branding/GlobalStyles';
import Header from '../../Global/components/Header';
import { useIsFocused } from '@react-navigation/native';
import NodataFound from '../../Global/components/NoDataFound';
const WindowWidth = Dimensions.get('window').width;

const FavouriteImagesScreen = ({ navigation }) => {
  const [favourites, setFavourites] = useState([]);
const focused = useIsFocused()
  useEffect(() => {
    const fetchFavourites = async () => {
      try {
        const favouriteIds = await AsyncStorage.getItem('favourites');
        if (favouriteIds !== null) {
          const parsedFavouriteIds = JSON.parse(favouriteIds);
          const favouriteImages = data.filter(image => parsedFavouriteIds.includes(image.id));
          setFavourites(favouriteImages);
        }
      } catch (error) {
        console.error('Error fetching favourites:', error);
      }
    };

    fetchFavourites();
  }, [focused]);

  return (
    <View style={GlobalStyles.Container}>
        <Header
        name={"Favorites"}
      />
      {favourites.length > 0 ? (
        <FlatList
          data={favourites}
          numColumns={2}
          renderItem={({ item }) => <ImageList item={item} />}
          keyExtractor={item => item.id.toString()}
        />
      ) : (
        <NodataFound/>
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

export default FavouriteImagesScreen;
