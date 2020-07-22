import React from 'react';
import {View, Text} from 'react-native';
import styles from './style.js';

const NavigationDrawer = ({name, children}) => {
  return (
    <View style={styles.navigationDrawer}>
      <View style={styles.buttonTop} />
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.subtitle}>Tulip • 37 days • Healthy</Text>
      <View style={styles.divider} />
      {children}
    </View>
  );
};

export default NavigationDrawer;
