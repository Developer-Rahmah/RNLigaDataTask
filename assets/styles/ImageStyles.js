import {StyleSheet, Dimensions} from 'react-native';
export default StyleSheet.create({
  logo: {
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').width / 2,
    resizeMode: 'contain',
  },

  smallTeaserImage: {
    width: Dimensions.get('window').width / 5,
    height: Dimensions.get('window').width / 5,
    resizeMode: 'contain',
  },

  posterImage: {
    width: '100%',
    height: Dimensions.get('window').height / 2.5,
    resizeMode: 'cover',
  },

  iconImage: {
    width: Dimensions.get('window').width / 17,
    height: Dimensions.get('window').width / 17,
  },
});
