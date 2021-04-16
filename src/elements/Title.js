import React from 'react';
import {Text} from 'react-native';
import Styles from 'LigaDataTask/assets/styles';
import {tahomaFont, tahomaFontBold} from 'LigaDataTask/assets/styles/Fonts';

const Title = ({
  title,
  color = Styles.Colors.BLACK,
  numberOfLines = 1,
  style = {},
  bold = false,
}) => {
  return (
    <Text
      style={[
        Styles.Elements.title,
        {color, fontFamily: bold ? tahomaFontBold : tahomaFont},
        style,
      ]}
      numberOfLines={numberOfLines}>
      {title}
    </Text>
  );
};

export default Title;
