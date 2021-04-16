import React from 'react';
import {Text} from 'react-native';
import Styles from 'LigaDataTask/assets/styles';
import Colors from 'LigaDataTask/assets/styles/Colors';
const Summary = ({
  description,
  color = Colors.BLACK,
  numberOfLines = 3,
  onPress = null,
  textDecorationLine,
}) => {
  return (
    <Text
      onPress={() => onPress}
      style={[
        Styles.Elements.summary,
        {
          color: color,
          textDecorationLine: textDecorationLine ? 'underline' : 'none',
        },
      ]}
      numberOfLines={numberOfLines}>
      {description}
    </Text>
  );
};

export default Summary;
