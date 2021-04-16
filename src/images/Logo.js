import Styles from 'LigaDataTask/assets/styles';
import React from 'react';
import {Image, View} from 'react-native';

const Logo = ({source, gutter = true}) => (
  <View style={gutter ? Styles.General.gutterEnd : null}>
    <Image source={source} style={[Styles.ImageStyles.logo]} />
  </View>
);
export default Logo;
