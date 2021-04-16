import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import Colors from 'LigaDataTask/assets/styles/Colors';

const LoadingMore = ({loading}) => {
  return (
    <View>
      {loading ? <ActivityIndicator size="large" color={Colors.WHITE} /> : null}
    </View>
  );
};

export default LoadingMore;
