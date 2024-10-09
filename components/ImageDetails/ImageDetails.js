import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { addFavourite, removeFavourite, isFavourite } from '../../Global/Calls/Fav_Actions';
import data from '../../Global/Jsons/Collection';
import { WindowHeight } from '../../Global/components/Dimensions';
import ImageList from '../Home/ImageLIst';
import Colors from '../../Global/Branding/colors';

const WindowWidth = Dimensions.get('window').width;

const ImageDetailScreen = ({ route, navigation }) => {
  const { item } = route.params;
  const [favourite, setFavourite] = useState(false);

  useEffect(() => {
    const checkFavourite = async () => {
      const isFav = await isFavourite(item.id);
      setFavourite(isFav);
    };
    checkFavourite();
  }, [item.id]);

  const toggleFavourite = async () => {
    if (favourite) {
      await removeFavourite(item.id);
    } else {
      await addFavourite(item.id);
    }
    setFavourite(!favourite);
  };

  return (
    <View style={styles.container}>
         <TouchableOpacity onPress={() => navigation.navigate('FullImagePreviewScreen', { imageUri: item.image })}>
        <Image source={{ uri: item.image }} style={styles.mainImage} />
      </TouchableOpacity>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <View style={styles.infoRow}>
          <View style={styles.infoItem}>
            <MaterialIcons name="thumb-up" size={20} color={Colors.black} />
            <Text style={styles.infoText}>{item.likes}</Text>
          </View>
          <View style={styles.infoItem}>
            <MaterialIcons name="file-download" size={20} color={Colors.black} />
            <Text style={styles.infoText}>{item.downloads}</Text>
          </View>
          <View style={styles.infoItem}>
            <MaterialIcons name="high-quality" size={20} color={Colors.black} />
            <Text style={styles.infoText}>{item.quality}</Text>
          </View>
        </View>
        <Text style={styles.source}>Source: {item.source}</Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.downloadButton}>
            <MaterialIcons name="file-download" size={18} color="#fff" />
            <Text style={styles.downloadText}>Download</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleFavourite} style={styles.favouriteButton}>
            <MaterialIcons name={favourite ? "favorite" : "favorite-border"} size={18} color="#fff" />
            <Text style={styles.downloadText}>Favourite</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.relatedTitle}>Related Images</Text>
      <FlatList
        data={data}
        horizontal
        renderItem={({ item }) => (
          <ImageList item={item} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: WindowHeight,
    padding: 10,
  },
  mainImage: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginTop: 30,
  },
  detailsContainer: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    marginBottom: 10,
    color:"rgba(0,0,0,0.6)"
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    marginLeft: 5,
    fontSize: 14,
    color:"rgba(0,0,0,0.6)"
  },
  source: {
    fontSize: 14,
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  downloadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.PrimaryColor,
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  favouriteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.PrimaryColor,
    padding: 10,
    borderRadius: 5,
  },
  downloadText: {
    color: '#fff',
    marginLeft: 5,
    fontSize: 14,
  },
  relatedTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 0,
    marginBottom: 10,
  },
  relatedImage: {
    width: WindowWidth / 3,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
});

export default ImageDetailScreen;
