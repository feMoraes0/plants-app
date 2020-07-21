import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native';
import BellIcon from '../../assets/icons/bell.svg';
import AddIcon from '../../assets/icons/add.svg';
import flowerImage01 from '../../assets/images/flower-001.png';
import flowerImage02 from '../../assets/images/flower-002.png';
import flowerImage03 from '../../assets/images/flower-003.png';
import flowerImage04 from '../../assets/images/flower-004.png';
import flowerImage05 from '../../assets/images/flower-005.png';
import flowerImage06 from '../../assets/images/flower-006.png';

const Flower = () => {
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
              <View style={styles.card}>
                <Image style={styles.cardImage} source={item.image} />
                <Text style={styles.cardText}>{item.name}</Text>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 19,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 30,
    fontFamily: 'Raleway-Bold',
    letterSpacing: 1.09375,
    color: '#3C4046',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionIcon: {
    marginLeft: 16,
  },
  body: {
    marginTop: 30,
    paddingHorizontal: 16.5,
    paddingBottom: 100,
  },
  card: {
    flex: 1,
    marginHorizontal: 7.5,
    marginBottom: 30,
    alignItems: 'center',
    shadowColor: '#B8CDD0',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1.0,
    shadowRadius: 6.68,
    elevation: 10,
  },
  cardImage: {
    flex: 1,
    borderRadius: 8,
    marginBottom: 20,
  },
  cardText: {
    color: '#3C4046',
    letterSpacing: 1.09375,
    fontSize: 16,
    lineHeight: 19,
    fontFamily: 'Raleway-Regular',
  },
});

export default Flower;
