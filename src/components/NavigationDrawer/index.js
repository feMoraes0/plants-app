import React from 'react';
import {Animated, View, Text} from 'react-native';
import styles from './style.js';
import {PanGestureHandler} from 'react-native-gesture-handler';

const NavigationDrawer = ({
  animatedEvent,
  handleMenu,
  heightAnimate,
  name,
  children,
}) => {
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
