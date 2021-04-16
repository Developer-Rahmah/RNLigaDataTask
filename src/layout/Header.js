import React, {useEffect} from 'react';
import {View, TouchableOpacity} from 'react-native';
import style from 'LigaDataTask/assets/styles';
import {useNavigation} from '@react-navigation/native';
import backIcon from 'LigaDataTask/assets/icons/arrow_back.png';
import logoutIcon from 'LigaDataTask/assets/icons/logout.png';
import {useSelector, useDispatch} from 'react-redux';
import Colors from 'LigaDataTask/assets/styles/Colors';
import IconImage from 'LigaDataTask/src/images/IconImage';
import Title from 'LigaDataTask/src/elements/Title';
import {isIphoneX} from 'react-native-iphone-x-helper';
import styles from 'LigaDataTask/assets/styles';

const Header = ({title = 'HAPPI', showBack = false}) => {
  const navigation = useNavigation();
  
 
  return (
    <View
      style={[
        style.Layout.header,
        isIphoneX()
          ? styles.Elements.headerTopPaddingIphoneXCase
          : styles.Elements.headerTopPadding,
      ]}>
      {/* Back button */}
      <TouchableOpacity
        style={[
          styles.Layout.headerIcon,
          showBack ? styles.Layout.displayFlex : styles.Layout.displayNone,
        ]}
        onPress={() => {
          navigation.goBack();
        }}>
        <IconImage source={backIcon} />
      </TouchableOpacity>

      {/* screen title */}
      <View
        style={[
          showBack
            ? styles.Elements.headerTitleContainerInShowBackCase
            : 'true'
            ? styles.Elements.headerTitleContainerInAuthCase
            : styles.Layout.fullWidth,
        ]}>
        <Title title={title} bold color={Colors.WHITE} />
      </View>

      {/* logout button */}
      <TouchableOpacity
        style={[
          styles.Layout.headerIcon,
        ]}
        onPress={() => {
         
        }}>
        <IconImage source={logoutIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
