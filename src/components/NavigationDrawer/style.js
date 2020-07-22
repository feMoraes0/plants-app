import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  navigationDrawer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#FFFFFF',
    zIndex: 2,
    paddingTop: 20,
    paddingBottom: 25,
    paddingHorizontal: 30,
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  buttonTop: {
    backgroundColor: '#DCDBDA',
    borderRadius: 2,
    height: 4,
    width: 30,
  },
  title: {
    fontFamily: 'Raleway-Bold',
    fontSize: 24,
    lineHeight: 28,
    letterSpacing: 1.64062,
    color: '#3C4046',
    marginTop: 22,
  },
  subtitle: {
    color: '#828282',
    fontFamily: 'Raleway',
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: 1.04,
    marginTop: 11,
    marginBottom: 35,
  },
  divider: {
    height: 1,
    width: '90%',
    backgroundColor: '#E6E6E6',
    marginBottom: 27,
  },
});

export default styles;
