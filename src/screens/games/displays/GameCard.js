import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import styles from 'LigaDataTask/assets/styles';
import Colors from 'LigaDataTask/assets/styles/Colors';
import Title from 'LigaDataTask/src/elements/Title';
import {useNavigation} from '@react-navigation/native';
import {useRandomlyPhoto} from 'LigaDataTask/services/hooks/index';
import TeaserImage from 'LigaDataTask/src/images/TeaserImage';

const GameCard = ({item}) => {
  const navigation = useNavigation();
  const {selectedPhoto} = useRandomlyPhoto({});

  return (
    <>
      <View
        style={[
          styles.Layout.fullWidth,
          styles.Layout.smallCardPadding,
          styles.General.smallVerticalPadding,
        ]}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('GameDetails', {
              item: item,
              cover: selectedPhoto,
            })
          }
          radius
          style={[styles.General.greenBackground, styles.Layout.flexCenter]}>
          <TeaserImage source={selectedPhoto} color={Colors.LIGHT_GREEN} />
          <View style={styles.General.mediumVerticalPadding}>
            <Title
              numberOfLines={1}
              title={item.home_team.name}
              color={Colors.BLACK}
            />
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default GameCard;
