import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Slider from '@react-native-community/slider';

const SliderCustom = () => {
  const [sliderValue, setSliderValue] = useState(1);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Slider</Text>
      <Slider
        style={styles.slider}
        value={sliderValue}
        minimumValue={1}
        maximumValue={10}
        step={9}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
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
  },
  label: {
    width: '15%',
  },
  slider: {
    width: '85%',
  },
});

export default SliderCustom;
