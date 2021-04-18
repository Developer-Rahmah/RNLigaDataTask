import React from 'react';
import Header from 'LigaDataTask/src/layout/Header';
import styles from 'LigaDataTask/assets/styles';
import {View} from 'react-native';
import PlayerDetails from 'LigaDataTask/src/screens/players/displays/PlayerDetails';
import {useGet} from 'LigaDataTask/services/hooks';
import {GET} from 'LigaDataTask/services/config/api';
import Loader from 'LigaDataTask/src/general/Loader';

const index = ({route}) => {
  const {data, status, loading} = useGet({
    uri: `${GET.PLAYERS}/${route.params.item.id}`,
    hasPagination: false,
    getData: res => res.data,
  });
  return (
    <>
      <Header
        title={
          data.first_name != undefined
            ? `${data.first_name} ${data.last_name}`
            : ''
        }
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
          <PlayerDetails item={data} index={index} />
        ) : (
          <Loader />
        )}
      </View>
    </>
  );
};
export default index;
