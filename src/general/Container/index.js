import styles from 'LigaDataTask/assets/styles';
import React from 'react';
import {View} from 'react-native';

const Container = ({
  children,

  style = {},
  ...rest
}) => {
  return (
    <View
      style={[
        styles.General.fullScreen,
        styles.General.largePadding,
        styles.General.lightYellowBackground,
        styles.General.paddingBottom,
        styles.General.justifyContentCenter,
      ]}
      {...rest}>
      {children}
    </View>
  );
};

export default Container;
