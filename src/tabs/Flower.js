import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import BellIcon from '../../assets/icons/bell.svg';
import AddIcon from '../../assets/icons/add.svg';

const Flower = () => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Plants</Text>
        <View style={styles.actions}>
          <BellIcon style={styles.actionIcon} />
          <AddIcon style={styles.actionIcon} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 19,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 30,
    fontFamily: 'Raleway-Bold',
    letterSpacing: 1.09375,
    color: '#3C4046',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionIcon: {
    marginLeft: 16,
  },
});

export default Flower;
