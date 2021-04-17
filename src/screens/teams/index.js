import React from 'react';
import TeamCard from 'LigaDataTask/src/screens/teams/displays/TeamCard';
import Header from 'LigaDataTask/src/layout/Header';
import Rows from 'LigaDataTask/src/general/Rows';
import {GET} from 'LigaDataTask/services/config/api';
import {useGet} from 'LigaDataTask/services/hooks';
import StatusBlock from 'LigaDataTask/src/general/StatusBlock';
import Container from 'LigaDataTask/src/general/Container';

const index = ({navigation: {}}) => {
  const {data, status, loading, loadMore, loadingMore} = useGet({
    uri: GET.TEAMS,
    hasPagination: true,
    getData: res => res.data.data,
  });

  return (
    <>
      <Header title="Teams" />
      <StatusBlock status={status} loading={loading}>
        <Container>
          <Rows
            onEndReached={loadMore}
            loading={loadingMore}
            keyExtractor={item => String(item.id)}
            numColumns={2}
            data={data}
            renderItem={({item, index}) => (
              <TeamCard item={item} index={index} dataLength={data.length} />
            )}
          />
        </Container>
      </StatusBlock>
    </>
  );
};
export default index;
