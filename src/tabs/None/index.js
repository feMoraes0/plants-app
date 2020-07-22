import React from 'react';
import {View, Text} from 'react-native';
import styles from './style.js';
import FlowerIcon from '../../../assets/icons/flower.svg';

const None = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Not defined</Text>
      <FlowerIcon width={30} heigth={30} />
    </View>
  );
};

export default None;
