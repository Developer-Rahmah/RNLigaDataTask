import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import style from 'LigaDataTask/assets/styles';
import colors from 'LigaDataTask/assets/styles/Colors';

const StatusBlock = ({loading, children, noIndicator, topPadding}) => {
  // Sometimes, 'loading' prop can be an array of booleans, we handle them, and only render the children
  // when everything is done loading.
  const isLoadingArray =
    loading instanceof Array && loading.some((load) => load == true);

  // If the 'loading' prop is a boolean, we handle it normally.
  const isLoadingBoolean = typeof loading == 'boolean' && loading;

  // If it is loading, render the 'Loader' indicator, else, we render the children
  if (isLoadingArray || isLoadingBoolean) {
    return noIndicator ? null : (
      <View
        style={style.General.fullScreen}>
        <ActivityIndicator color={colors.darkGray} size="large" />
      </View>
    );
  } else {
    return typeof children == 'function' ? children() : children;
  }
};

export default StatusBlock;
