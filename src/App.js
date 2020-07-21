import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import Details from './pages/Details';

const App = () => {
  const {Navigator, Screen} = createStackNavigator();

  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Screen name="home" component={Home} />
        <Screen name="details" component={Details} />
      </Navigator>
    </NavigationContainer>
  );
};

export default App;
