import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Flower from './tabs/Flower';
import None from './tabs/None';
import FlowerIcon from '../assets/icons/flower.svg';
import HeartIcon from '../assets/icons/heart.svg';
import UserIcon from '../assets/icons/user.svg';

const Home = () => {
  const {Navigator, Screen} = createBottomTabNavigator();

  return (
    <Navigator
      tabBarOptions={{
        showLabel: false,
      }}>
      <Screen
        name="flowers"
        component={Flower}
        options={{
          tabBarIcon: ({focused}) => (
            <FlowerIcon
              width={30}
              heigth={30}
              fill={focused ? '#3C4046' : '#979797'}
            />
          ),
        }}
      />
      <Screen
        name="favourites"
        component={None}
        options={{
          tabBarIcon: ({focused, inactiveTintColor, activeTintColor}) => (
            <HeartIcon
              width={30}
              heigth={30}
              fill={focused ? '#3C4046' : '#979797'}
            />
          ),
        }}
      />
      <Screen
        name="person"
        component={None}
        options={{
          tabBarIcon: ({focused}) => (
            <UserIcon
              width={30}
              heigth={30}
              fill={focused ? '#3C4046' : '#979797'}
            />
          ),
        }}
      />
    </Navigator>
  );
};

export default Home;
