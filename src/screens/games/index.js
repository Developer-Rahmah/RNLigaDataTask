import React from 'react';
import Header from 'LigaDataTask/src/layout/Header';
import Rows from 'LigaDataTask/src/general/Rows';
import styles from 'LigaDataTask/assets/styles';
import {View} from 'react-native';
import {GET} from 'LigaDataTask/services/config/api';
import {useGet} from 'LigaDataTask/services/hooks';
import StatusBlock from 'LigaDataTask/src/general/StatusBlock';
import GameCard from './displays/GameCard';

const index = ({navigation: {}}) => {
  const {data, status, loading, loadMore, loadingMore} = useGet({
    uri: GET.GAMES,
    hasPagination: true,
    getData: res => res.data.data,
    getPagination: res => res.data.pagination,
  });

  return (
    <>
      <Header title="Teams" />
      <StatusBlock status={status} loading={loading}>
        <View
          style={[
            styles.General.fullScreen,
            styles.General.largePadding,
            styles.General.darkPurpleBackground,
            styles.General.paddingBottom,
            styles.General.justifyContentCenter,
          ]}>
          <Rows
            onEndReached={loadMore}
            loading={loadingMore}
            keyExtractor={item => String(item.id)}
            data={data}
            renderItem={({item, index}) => (
              <GameCard item={item} index={index} dataLength={data.length}  />
            )}
          />
        </View>
      </StatusBlock>
    </>
  );
};
export default index;
