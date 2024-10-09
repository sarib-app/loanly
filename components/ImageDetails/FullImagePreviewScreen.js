import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
// import * as FileSystem from 'expo-file-system';
// import * as MediaLibrary from 'expo-media-library';
// import * as Permissions from 'expo-permissions';

const WindowWidth = Dimensions.get('window').width;
const WindowHeight = Dimensions.get('window').height;

const FullImagePreviewScreen = ({ route, navigation }) => {
  const { imageUri } = route.params;

//   const downloadImage = async () => {
//     try {
//       const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
//       if (status === 'granted') {
//         const fileUri = FileSystem.documentDirectory + imageUri.split('/').pop();
//         const { uri } = await FileSystem.downloadAsync(imageUri, fileUri);
//         await MediaLibrary.createAssetAsync(uri);
//         alert('Image downloaded successfully!');
//       } else {
//         alert('Permission to access media library is required!');
//       }
//     } catch (error) {
//       console.error('Error downloading image:', error);
//       alert('Failed to download image.');
//     }
//   };

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUri }} style={styles.fullImage} />
      <TouchableOpacity style={styles.downloadButton} onPress={{}}>
        <MaterialIcons name="file-download" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  fullImage: {
    width: WindowWidth,
    height: WindowHeight,
    resizeMode: 'contain',
  },
  downloadButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 25,
  },
});

export default FullImagePreviewScreen;
