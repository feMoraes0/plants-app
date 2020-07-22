import React from 'react';
import {Animated, View, Text} from 'react-native';
import styles from './style.js';
import {PanGestureHandler, State} from 'react-native-gesture-handler';

const NavigationDrawer = ({name, children}) => {
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
    <PanGestureHandler
      onGestureEvent={animatedEvent}
      onHandlerStateChange={handleMenu}>
      <Animated.View
        style={[
          styles.navigationDrawer,
          {
            transform: [
              {
                translateY: heightAnimate.interpolate({
                  inputRange: [0, 260],
                  outputRange: [0, 260],
                  extrapolate: 'clamp',
                }),
              },
            ],
          },
        ]}>
        <View style={styles.buttonTop} />
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>Tulip • 37 days • Healthy</Text>
        <View style={styles.divider} />
        <Animated.View
          style={{
            opacity: heightAnimate.interpolate({
              inputRange: [0, 220],
              outputRange: [1, 0],
            }),
          }}>
          {children}
        </Animated.View>
      </Animated.View>
    </PanGestureHandler>
  );
};

export default NavigationDrawer;
