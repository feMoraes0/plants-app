import React, {useRef, useState} from 'react';
import {Animated, View, Text, TouchableOpacity} from 'react-native';
import styles from './style.js';

const NavigationDrawer = ({name, children}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const heightAnimate = useRef(new Animated.Value(260)).current;

  const openMenu = () => {
    Animated.timing(heightAnimate, {
      toValue: 0,
      timing: 500,
      useNativeDriver: true,
    }).start();
    setMenuOpen(true);
  };

  const closeMenu = () => {
    Animated.timing(heightAnimate, {
      toValue: 260,
      timing: 500,
      useNativeDriver: true,
    }).start();
    setMenuOpen(false);
  };

  return (
    <Animated.View
      style={[
        styles.navigationDrawer,
        {transform: [{translateY: heightAnimate}]},
      ]}>
      <TouchableOpacity
        onPress={() => {
          menuOpen ? closeMenu() : openMenu();
        }}>
        <View style={styles.buttonTop} />
      </TouchableOpacity>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.subtitle}>Tulip • 37 days • Healthy</Text>
      <View style={styles.divider} />
      {children}
    </Animated.View>
  );
};

export default NavigationDrawer;
