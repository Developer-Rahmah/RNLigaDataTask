import {StyleSheet, Dimensions} from 'react-native';
import Colors from './Colors';

export default StyleSheet.create({
  fullScreen: {
    width: '100%',
    height: '100%',
  },

  lightGrayBackground: {
    backgroundColor: Colors.BEIGE,
  },

  greenBackground: {
    backgroundColor: Colors.GREEN,
  },

  transparentBackground: {
    backgroundColor: 'transparent',
  },
  lightYellowBackground: {
    backgroundColor: Colors.LIGHT_YELLOW,
  },

  horizontalPadding: {
    paddingHorizontal: 10,
  },

  verticalPadding: {
    paddingVertical: Dimensions.get('window').height / 17,
  },
  mediumVerticalPadding: {
    paddingVertical: Dimensions.get('window').height / 35,
  },
  smallVerticalPadding: {
    paddingVertical: Dimensions.get('window').height / 80,
  },

  paddingBottom: {
    paddingBottom: Dimensions.get('window').height / 7.5,
  },
  paddingTop: {
    paddingTop: Dimensions.get('window').height / 15,
  },
  shadow: {
    elevation: 1.5,
    shadowColor: Colors.BLACK,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 1,
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },

  largePadding: {
    paddingVertical: Dimensions.get('window').width / 27,
    paddingHorizontal: Dimensions.get('window').width / 37,
  },
});
