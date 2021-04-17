import React from 'react';
import {View} from 'react-native';
import styles from 'LigaDataTask/assets/styles';
import Card from 'LigaDataTask/src/general/Card';
import IconImage from 'LigaDataTask/src/images/IconImage';
import Teams from 'LigaDataTask/assets/icons/teams.png';
import Colors from 'LigaDataTask/assets/styles/Colors';
import Title from 'LigaDataTask/src/elements/Title';
import {useNavigation} from '@react-navigation/native';

const TeamCard = ({item, dataLength, index}) => {
  const navigation = useNavigation();

  return (
    <>
      <View style={[styles.Layout.fullWidth, styles.Layout.smallCardPadding]}>
        <Card
          onPress={() => navigation.navigate('TeamDetails', {item: item})}
          radius
          style={[
            styles.General.shadow,
            styles.General.purpleBackground,
            styles.Layout.flexCenter,
            styles.General.verticalPadding,
            styles.General.horizontalPadding,
            index == dataLength - 1 && dataLength % 2 == 1
              ? styles.Layout.widthHalf
              : styles.Layout.fullWidth,
          ]}>
          <View style={styles.Layout.bottomSpace}>
            <IconImage source={Teams} color={Colors.LIGHT_GREEN} />
          </View>
          <Title
            numberOfLines={1}
            title={item.full_name}
            color={Colors.BLACK}
          />
        </Card>
      </View>
    </>
  );
};

export default TeamCard;
