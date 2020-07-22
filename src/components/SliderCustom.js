import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
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

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    width: '25%',
    color: '#828282',
    fontFamily: 'Raleway-Bold',
    letterSpacing: 0.957031,
    fontSize: 10,
    lineHeight: 12,
    textTransform: 'uppercase',
  },
  slider: {
    width: '75%',
  },
});

export default SliderCustom;
