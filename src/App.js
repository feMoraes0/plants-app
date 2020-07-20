import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Flower from './tabs/Flower';
import None from './tabs/None';

const App = () => {
  const {Navigator, Screen} = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="flowers" component={Flower} />
        <Screen name="favourites" component={None} />
      </Navigator>
    </NavigationContainer>
  );
};

export default App;
