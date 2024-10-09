import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import HomeScreen from '../Home/Home';
import Colors from '../../Global/Branding/colors';
import Profile from '../Porfile/Porfile';
import FavouriteImagesScreen from '../FavoriteIMageScreen.js/FavIMageScreen';
import TopImages from '../FavoriteIMageScreen.js/TopImages';
import Notifications from '../Notifications.js/Notifications';
const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown:false,
        tabBarStyle: {
            backgroundColor: Colors.Dark,
            borderTopWidth: 0,
          
          
          },
          
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Loans') {
            iconName = 'cash-outline';
          } else if (route.name === 'Profile') {
            iconName = 'person-outline';
          }
          else if (route.name === 'Favorites') {
            iconName = 'heart-circle-outline';
          }
          else if (route.name === 'Hot') {
            iconName = 'hotjar';
          }
          else if (route.name === 'Notifications') {
            iconName = 'notifications';
          }
if(route.name === 'Hot'){
  return <FontAwesome5 name={iconName} size={size} color={color} />;

}
else{

  return <Ionicons name={iconName} size={size} color={color} />;
}
        },
        tabBarActiveTintColor: Colors.PrimaryColor,
        tabBarInactiveTintColor: 'gray',
      })}
      
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Hot" component={TopImages} />
      <Tab.Screen name="Favorites" component={FavouriteImagesScreen} />
      <Tab.Screen name="Notifications" component={Notifications} />


      <Tab.Screen name="Profile" component={Profile} />

    </Tab.Navigator>
  );
};

export default BottomNavigation;
