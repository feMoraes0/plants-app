import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import ArrowLeft from '../../assets/icons/arrow-left.svg';
import Dots from '../../assets/icons/dots.svg';
import NavigationDrawer from '../components/NavigationDrawer';

const Details = ({route, navigation}) => {
  const {flower} = route.params;
  return (
    <>
      <Image style={styles.image} source={flower.image} />
      <NavigationDrawer name={flower.name} />
      <SafeAreaView style={styles.frontPage}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.pop()}>
            <ArrowLeft />
          </TouchableOpacity>
          <Dots />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
  frontPage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 2,
    justifyContent: 'space-between',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
    paddingHorizontal: 30,
  },
});

export default Details;
