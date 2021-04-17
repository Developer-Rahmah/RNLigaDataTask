import {Dimensions, I18nManager, StyleSheet} from 'react-native';
import Colors from 'LigaDataTask/assets/styles/Colors';
import {tahomaFont} from 'LigaDataTask/assets/styles/Fonts';

export default StyleSheet.create({
  title: {
    fontFamily: tahomaFont,
    fontSize: 20,
    textAlign: 'center',
  },

  summary: {
    color: Colors.LIGHT_GRAY,
    fontFamily: tahomaFont,
    fontSize: 15,
    textAlign: 'left',
  },

  searchInputContainer: {
    padding: 7,
    borderRadius: Dimensions.get('window').width / 7,
    borderColor: Colors.GRAY,
    borderWidth: 1,
    backgroundColor: Colors.WHITE,
  },
  inputContainer: {
    width: '90%',
  },
  input: {
    color: Colors.BLACK,
    fontFamily: tahomaFont,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },

  primaryButton: {
    backgroundColor: Colors.PURPLE,
    padding: 7,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottomTabContainer: {
    bottom: 0,
    flexDirection: 'row',
    backgroundColor: Colors.WHITE,
    borderTopColor: Colors.LIGHT_GRAY,
    borderTopWidth: 0.9,
  },
  bottomTabButtonContainer: {
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderTopWidth: 0,
  },

  lightSeparator: {
    width: '100%',
    height: 1,
    opacity: 0.5,
    marginVertical: 3,
    backgroundColor: Colors.WHITE,
  },

  noItemsMessageContainer: {
    height: Dimensions.get('window').height / 1.7,
  },

  playerName: {
    width: '68%',
  },
  searchListingBottomPadding: {
    paddingBottom: Dimensions.get('window').height / 4,
  },
  headerTopPaddingIphoneXCase: {
    paddingTop: Dimensions.get('window').height / 20,
  },
  headerTopPadding: {
    paddingTop: Dimensions.get('window').height / 47,
  },
  headerTitleContainerInAuthCase: {
    width: '100%',
  },
  headerTitleContainerInShowBackCase: {
    width: '80%',
  },
});
