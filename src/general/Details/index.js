import styles from 'LigaDataTask/assets/styles';
import Title from 'LigaDataTask/src/elements/Title';
import React from 'react';
import Colors from 'LigaDataTask/assets/styles/Colors';
import {View} from 'react-native';
import Summary from 'LigaDataTask/src/elements/Summary';

const Details = ({title, description}) => {
  return (
    <>
      <View
        style={[
          styles.Layout.flexDirectionRow,
          styles.Layout.fullWidth,
          styles.Layout.cardPadding,
          styles.General.horizontalPadding,
        ]}>
        <View
          style={[styles.Layout.widthHalf, styles.Layout.alignItemsFlexStart]}>
          <Title color={Colors.BLACK} title={title} />
        </View>
        <View
          style={[styles.Layout.widthHalf, styles.Layout.alignItemsFlexEnd]}>
          <Summary color={Colors.BLACK} description={description} />
        </View>
      </View>
      <View style={styles.Elements.lightSeparator} />
    </>
  );
};

export default Details;
