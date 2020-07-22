import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styles from './style.js';
import Slider from '@react-native-community/slider';

const SliderCustom = ({maximumValue, minimumValue, initialValue, label}) => {
  const [sliderValue, setSliderValue] = useState(initialValue);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Slider
        style={styles.slider}
        thumbTintColor="#3C4046"
        value={sliderValue}
        minimumValue={minimumValue}
        maximumValue={maximumValue}
        step={1}
        minimumTrackTintColor="#3C4046"
        maximumTrackTintColor="#E6E6E6"
        onValueChange={(value) => setSliderValue(value)}
      />
    </View>
  );
};

export default SliderCustom;
