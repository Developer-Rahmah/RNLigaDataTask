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
      <Header
        title={data.home_team != undefined ? data.home_team.name : ''}
        showBack
      />
      <View
        style={[
          styles.General.fullScreen,
          styles.General.largePadding,
          styles.General.darkPurpleBackground,
          styles.General.paddingBottom,
          styles.General.justifyContentCenter,
        ]}>
        {data != undefined ? (
          <GameDetails item={data} index={index} cover={route.params.cover} />
        ) : (
          <ActivityIndicator size="large" color={Colors.BLACK} />
        )}
      </View>
    </>
  );
};
export default index;
