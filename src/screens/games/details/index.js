import React from 'react';
import Header from 'LigaDataTask/src/layout/Header';
import styles from 'LigaDataTask/assets/styles';
import {ActivityIndicator, View} from 'react-native';
import Colors from 'LigaDataTask/assets/styles/Colors';
import {useGet} from 'LigaDataTask/services/hooks';
import {GET} from 'LigaDataTask/services/config/api';
import GameDetails from '../displays/GameDetails';

const index = ({route}) => {
  const {data, status, loading} = useGet({
    uri: `${GET.GAMES}/${route.params.item.id}`,
    hasPagination: false,
    getData: res => res.data,
  });
  return (
    <>
      <Header title={data.name != undefined ? data.name : ''} showBack />
      <View
        style={[
          styles.General.fullScreen,
          styles.General.largePadding,
          styles.General.darkPurpleBackground,
          styles.General.paddingBottom,
          styles.General.justifyContentCenter,
        ]}>
        {data != undefined ? (
          <GameDetails item={data} index={index} />
        ) : (
          <ActivityIndicator size="large" color={Colors.WHITE} />
        )}
      </View>
    </>
  );
};
export default index;
