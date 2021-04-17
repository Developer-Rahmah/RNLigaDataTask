import React from 'react';
import {View} from 'react-native';
import styles from 'LigaDataTask/assets/styles';
import Card from 'LigaDataTask/src/general/Card';
import Colors from 'LigaDataTask/assets/styles/Colors';
import Title from 'LigaDataTask/src/elements/Title';
import {useNavigation} from '@react-navigation/native';
import TeaserImage from 'LigaDataTask/src/images/TeaserImage';
import Player from 'LigaDataTask/assets/icons/player.png';


const PlayerCard = ({item}) => {
  const navigation = useNavigation();

  return (
    <>
      <View style={[styles.Layout.smallCardPadding]}>
        <Card
          onPress={() => navigation.navigate('PlayerDetails', {item: item})}
          radius
          style={[
            styles.General.shadow,
            styles.General.purpleBackground,
            styles.General.alignItemsCenter,
            styles.General.horizontalPadding,
            styles.Layout.flexDirectionRow,
          ]}>
          <View style={styles.General.horizontalPadding}>
            <TeaserImage smallImg source={Player} />
          </View>
          <Title
            style={styles.Elements.playerName}
            title={item.first_name + ' ' + item.last_name}
            color={Colors.WHITE}
          />
        </Card>
      </View>
    </>
  );
};

export default PlayerCard;
