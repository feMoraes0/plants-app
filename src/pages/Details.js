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

const Details = ({route, navigation}) => {
  const {flower} = route.params;
  return (
    <>
      <Image style={styles.image} source={flower.image} />
      <View style={styles.navigationDrawer}>
        <View style={styles.buttonTop} />
        <Text style={styles.title}>{flower.name}</Text>
        <Text style={styles.subtitle}>Tulip • 37 days • Healthy</Text>
      </View>
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
  navigationDrawer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#FFFFFF',
    zIndex: 2,
    paddingTop: 20,
    paddingBottom: 50,
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  buttonTop: {
    backgroundColor: '#DCDBDA',
    borderRadius: 2,
    height: 4,
    width: 30,
  },
  title: {
    fontFamily: 'Raleway-Bold',
    fontSize: 24,
    lineHeight: 28,
    letterSpacing: 1.64062,
    color: '#3C4046',
    marginTop: 22,
  },
  subtitle: {
    color: '#828282',
    fontFamily: 'Raleway',
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: 1.04,
    marginTop: 11,
  },
});

export default Details;
