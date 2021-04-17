import React, {useState} from 'react';
import Header from 'LigaDataTask/src/layout/Header';
import Rows from 'LigaDataTask/src/general/Rows';
import styles from 'LigaDataTask/assets/styles';
import {ScrollView, View} from 'react-native';
import {GET} from 'LigaDataTask/services/config/api';
import {useGet} from 'LigaDataTask/services/hooks';
import StatusBlock from 'LigaDataTask/src/general/StatusBlock';
import GameCard from './displays/GameCard';
import MultiSelect from 'react-native-multiple-select';
import {seasons} from 'LigaDataTask/services/helper';
import {tahomaFont} from 'LigaDataTask/assets/styles/Fonts';
import Colors from 'LigaDataTask/assets/styles/Colors';

const index = ({navigation: {}}) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const {
    data,
    status,
    loading,
    loadMore,
    loadingMore,
    setSelectedSeasons,
    fetch,
  } = useGet({
    uri: GET.GAMES,
    hasPagination: true,
    getData: res => res.data.data,
    getPagination: res => res.data.pagination,
  });
  const onSelectedItemsChange = selectedItems => {
    setSelectedItems(selectedItems);
  };
  onsubmit = () => {
    if (selectedItems.length > 0) {
      var seasonsArr = [];

      for (let i = 0; i <= selectedItems.length; i++) {
        if (selectedItems[i] != undefined) {
          seasonsArr.push(`seasons[]=${selectedItems[i]}`);
        }
        let seasonStrArr = seasonsArr.toString();
        seasonStrArr.replace(',', '&');

        let finalArr = seasonStrArr.split(',').join('&');
        setSelectedSeasons(finalArr);
      }
    }
  };
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
          <ScrollView style={{height: 300, width: '100%'}}>
            <MultiSelect
              hideTags
              onToggleList={() => onsubmit()}
              items={seasons(2019 - 40)}
              uniqueKey="id"
              onSelectedItemsChange={onSelectedItemsChange}
              selectedItems={selectedItems}
              selectText="Pick Items"
              searchInputPlaceholderText="Search Items..."
              onChangeInput={text => console.log(text)}
              altFontFamily={tahomaFont}
              tagRemoveIconColor={Colors.GRAY}
              tagBorderColor={Colors.GRAY}
              tagTextColor={Colors.GRAY}
              selectedItemTextColor={Colors.GRAY}
              selectedItemIconColor={Colors.GRAY}
              itemTextColor={Colors.BLACK}
              displayKey="name"
              searchInputStyle={{color: '#CCC'}}
              submitButtonColor={Colors.LIGHT_PINK}
              submitButtonText="Filter"
            />
          </ScrollView>
          <Rows
            onEndReached={loadMore}
            loading={loadingMore}
            keyExtractor={item => String(item.id)}
            data={data}
            renderItem={({item, index}) => (
              <GameCard item={item} index={index} dataLength={data.length} />
            )}
          />
        </View>
      </StatusBlock>
    </>
  );
};
export default index;
