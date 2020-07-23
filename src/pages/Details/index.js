import React from 'react';
import {Animated, SafeAreaView, View, TouchableOpacity} from 'react-native';
import styles from './style.js';
import ArrowLeft from '../../../assets/icons/arrow-left.svg';
import Dots from '../../../assets/icons/dots.svg';
import NavigationDrawer from '../../components/NavigationDrawer';
import SliderCustom from '../../components/SliderCustom';
import {State} from 'react-native-gesture-handler';

const Details = ({route, navigation}) => {
  const {flower} = route.params;
  let offset = 0;
  const heightAnimate = new Animated.Value(0);
  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: heightAnimate,
        },
      },
    ],
    {useNativeDriver: true},
  );

  const handleMenu = (event) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let isOpen = true;
      const {translationY} = event.nativeEvent;
      offset += translationY;

      if (translationY >= 10) {
        isOpen = false;
      } else {
        heightAnimate.setValue(offset);
        heightAnimate.setOffset(0);
        offset = 0;
      }

      Animated.timing(heightAnimate, {
        toValue: isOpen ? 0 : 260,
        timing: 1000,
        useNativeDriver: true,
      }).start(() => {
        offset = isOpen ? 0 : 260;
        heightAnimate.setOffset(offset);
        heightAnimate.setValue(0);
      });
    }
  };

  return (
    <View>
      <Animated.Image
        style={styles.image}
        source={flower.image}
        blurRadius={heightAnimate.interpolate({
          inputRange: [0, 200],
          outputRange: [0, 1],
          extrapolate: 'clamp',
        })}
      />
      <SafeAreaView style={styles.frontPage}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.pop()}>
            <ArrowLeft />
          </TouchableOpacity>
          <Dots />
        </View>
      </SafeAreaView>
      <NavigationDrawer
        animatedEvent={animatedEvent}
        handleMenu={handleMenu}
        heightAnimate={heightAnimate}
        name={flower.name}>
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
    </View>
  );
};

export default Details;
