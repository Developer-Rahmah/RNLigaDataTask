import React from 'react';
import Colors from 'LigaDataTask/assets/styles/Colors';
import {ActivityIndicator} from 'react-native';

const Loader = ({}) => {
  return <ActivityIndicator color={Colors.BLACK} size="large" />;
};

export default Loader;
