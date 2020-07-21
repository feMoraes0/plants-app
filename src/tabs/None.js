import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FlowerIcon from '../../assets/icons/flower.svg';

const None = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Not defined</Text>
      <FlowerIcon width={30} heigth={30} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    color: '#3C4046',
  },
});

export default None;
