import React, {useEffect, useState} from 'react';
import Header from 'LigaDataTask/src/layout/Header';
import Rows from 'LigaDataTask/src/general/Rows';
import styles from 'LigaDataTask/assets/styles';
import {Keyboard, TextInput, TouchableOpacity, View} from 'react-native';
import {GET} from 'LigaDataTask/services/config/api';
import PlayerCard from 'LigaDataTask/src/screens/players/displays/PlayerCard';
import {useGet} from 'LigaDataTask/services/hooks';
import StatusBlock from 'LigaDataTask/src/general/StatusBlock';
import IconImage from 'LigaDataTask/src/images/IconImage';
import Search from 'LigaDataTask/assets/icons/search.png';
import Container from 'LigaDataTask/src/general/Container';

const index = ({navigation: {}}) => {
  const [query, setQuery] = useState('');

  const {
    data,
    status,
    loading,
    loadMore,
    loadingMore,
    searchQuery,
    setSearchQuery,
    fetch,
  } = useGet({
    uri: GET.PLAYERS,
    hasPagination: true,
    getData: res => res.data.data,
  });
  const OnSearch = () => {
    setSearchQuery(query);

    fetch();
  };
  useEffect(() => {}, [searchQuery]);
  return (
    <>
      <Header title="Players" />

      <StatusBlock status={status} loading={loading}>
        <Container>
          <View
            style={[
              styles.Elements.searchInputContainer,
              styles.General.shadow,
              styles.Layout.margin,
              styles.Layout.flexDirectionRow,
              styles.General.alignItemsCenter,
            ]}>
            <View style={styles.Elements.inputContainer}>
              <TextInput
                value={query}
                style={styles.Elements.input}
                inlineImageLeft="search_icon"
                onChangeText={text => {
                  setQuery(text);
                }}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                Keyboard.dismiss(), OnSearch();
              }}>
              <IconImage source={Search} />
            </TouchableOpacity>
          </View>

          <Rows
            onEndReached={loadMore}
            loading={loadingMore}
            keyExtractor={item => String(item.id)}
            data={data}
            renderItem={({item, index}) => (
              <PlayerCard item={item} index={index} dataLength={data.length} />
            )}
          />
        </Container>
      </StatusBlock>
    </>
  );
};
export default index;
