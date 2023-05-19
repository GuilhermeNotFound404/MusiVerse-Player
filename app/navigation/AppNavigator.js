import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AudioList from '../screens/AudioList';
import Player from '../screens/Player';
import PlayList from '../screens/PlayList';
import { Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator ();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#A57FF8',
        },
        tabBarInactiveTintColor: '#1E1524',
        tabBarActiveTintColor: 'white',
      }}
    >
      <Tab.Screen name='AudioList' component={AudioList} options={{
        tabBarIcon: ({ color, size }) => {
          return <Ionicons name="headset" size={size} color={color} />;
        },
      }}/>
      <Tab.Screen name='Player' component={Player} options={{
        tabBarIcon: ({ color, size }) => {
          return <FontAwesome5 name="compact-disc" size={size} color={color} />;
        },
      }}/>
      <Tab.Screen name='Playlist' component={PlayList} options={{
        tabBarIcon: ({ color, size }) => {
          return <MaterialIcons name="library-music" size={size} color={color} />;
        },
      }}/>
    </Tab.Navigator>
  );
};

export default AppNavigator;
