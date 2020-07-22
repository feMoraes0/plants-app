import React from 'react';
import {SafeAreaView, View, Image, TouchableOpacity} from 'react-native';
import styles from './style.js';
import ArrowLeft from '../../../assets/icons/arrow-left.svg';
import Dots from '../../../assets/icons/dots.svg';
import NavigationDrawer from '../../components/NavigationDrawer';
import SliderCustom from '../../components/SliderCustom';

const Details = ({route, navigation}) => {
  const {flower} = route.params;
  return (
    <>
      <Image style={styles.image} source={flower.image} />
      <SafeAreaView style={styles.frontPage}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.pop()}>
            <ArrowLeft />
          </TouchableOpacity>
          <Dots />
        </View>
      </SafeAreaView>
      <NavigationDrawer name={flower.name}>
        <SliderCustom
          minimumValue={1}
          maximumValue={6}
          initialValue={3}
          label="water level"
        />
        <SliderCustom
          minimumValue={0}
          maximumValue={200}
          initialValue={75}
          label="water temp"
        />
        <SliderCustom
          minimumValue={0}
          maximumValue={100}
          initialValue={85}
          label="air temp"
        />
        <SliderCustom
          minimumValue={0}
          maximumValue={100}
          initialValue={23}
          label="CO2 PUMP"
        />
      </NavigationDrawer>
    </>
  );
};

export default Details;
