import styles from 'LigaDataTask/assets/styles';
import Title from 'LigaDataTask/src/elements/Title';
import React from 'react';
import Colors from 'LigaDataTask/assets/styles/Colors';
import {View} from 'react-native';

const EmptyListMessage = ({}) => {
  return (
    <View
      style={[
        styles.Layout.flexCenter,
        styles.Elements.noItemsMessageContainer,
        styles.Layout.fullWidth,
      ]}>
      <Title color={Colors.BLACK} title="There are no items" />
    </View>
  );
};

export default EmptyListMessage;
