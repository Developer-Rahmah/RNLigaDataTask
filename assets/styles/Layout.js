import {StyleSheet, Dimensions} from 'react-native';
import Colors from './Colors';

export default StyleSheet.create({
  card: {
    width: '100%',
    paddingVertical: 20,
  },
  radius: {
    borderRadius: 5,
  },

  flexCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  fullWidth: {
    width: '100%',
  },
  widthHalf: {
    width: '50%',
  },

  cardPadding: {
    padding: 20,
  },
  margin: {
    margin: 20,
  },
  smallCardPadding: {
    padding: 7,
  },

  bottomSpace: {
    paddingBottom: 7,
  },

  header: {
    top: 0,
    left: 0,
    width: '100%',
    height: Dimensions.get('window').height / 9,
    padding: 15,
    backgroundColor: Colors.LIGHT_PINK,
    alignItems: 'center',
    flexDirection: 'row',
  },

  logo: {
    width: 180,
    resizeMode: 'contain',
    height: 80,
  },

  flexDirectionRow: {
    flexDirection: 'row',
  },

  alignItemsFlexEnd: {
    alignItems: 'flex-end',
  },
  alignItemsFlexStart: {
    alignItems: 'flex-start',
  },
  statusBarHight: {
    height: Dimensions.get('window').height / 40,
  },

  headerIcon: {
    width: '10%',
  },
  displayNone: {
    display: 'none',
  },
  displayFlex: {
    display: 'flex',
  },
});
