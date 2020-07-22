import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './style.js';
import BellIcon from '../../../assets/icons/bell.svg';
import AddIcon from '../../../assets/icons/add.svg';
import flowerImage01 from '../../../assets/images/flower-001.png';
import flowerImage02 from '../../../assets/images/flower-002.png';
import flowerImage03 from '../../../assets/images/flower-003.png';
import flowerImage04 from '../../../assets/images/flower-004.png';
import flowerImage05 from '../../../assets/images/flower-005.png';
import flowerImage06 from '../../../assets/images/flower-006.png';

const Flower = ({navigation}) => {
  const data = [
    {id: 0, name: 'Samantha', image: flowerImage02},
    {id: 1, name: 'Angelica', image: flowerImage01},
    {id: 2, name: 'Jennifer', image: flowerImage03},
    {id: 3, name: 'Sebastian', image: flowerImage04},
    {id: 4, name: 'Annie', image: flowerImage05},
    {id: 5, name: 'George', image: flowerImage06},
  ];
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Plants</Text>
        <View style={styles.actions}>
          <BellIcon style={styles.actionIcon} />
          <AddIcon style={styles.actionIcon} />
        </View>
      </View>
      <View style={styles.body}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate('details', {flower: item})}>
                <Image style={styles.cardImage} source={item.image} />
                <Text style={styles.cardText}>{item.name}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Flower;
