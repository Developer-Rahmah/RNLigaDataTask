import React from 'react';
import Header from 'LigaDataTask/src/layout/Header';
import styles from 'LigaDataTask/assets/styles';
import {View} from 'react-native';
import {useGet} from 'LigaDataTask/services/hooks';
import {GET} from 'LigaDataTask/services/config/api';
import GameDetails from 'LigaDataTask/src/screens/games/displays/GameDetails';
import Loader from 'LigaDataTask/src/general/Loader';

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
          styles.General.lightYellowBackground,
          styles.General.paddingBottom,
          styles.General.justifyContentCenter,
        ]}>
        {data != undefined ? (
          <GameDetails item={data} index={index} cover={route.params.cover} />
        ) : (
          <Loader />
        )}
      </View>
    </>
  );
};
export default index;
