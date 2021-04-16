import React from 'react';
import {View} from 'react-native';

const Col = ({children, style = {}}) => {
  return <View style={[style]}>{children}</View>;
};

export default Col;
