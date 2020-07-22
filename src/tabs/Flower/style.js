import {StyleSheet} from 'react-native';

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

export default styles;
