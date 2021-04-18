import React, {useState} from 'react';
import Header from 'LigaDataTask/src/layout/Header';
import Rows from 'LigaDataTask/src/general/Rows';
import {ScrollView, View} from 'react-native';
import {GET} from 'LigaDataTask/services/config/api';
import {useGet} from 'LigaDataTask/services/hooks';
import StatusBlock from 'LigaDataTask/src/general/StatusBlock';
import GameCard from 'LigaDataTask/src/screens/games/displays/GameCard';
import MultiSelect from 'react-native-multiple-select';
import {seasons} from 'LigaDataTask/services/helper';
import {tahomaFont} from 'LigaDataTask/assets/styles/Fonts';
import Colors from 'LigaDataTask/assets/styles/Colors';
import Container from 'LigaDataTask/src/general/Container';
import styles from 'LigaDataTask/assets/styles';

const index = ({navigation: {}}) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const {data, loading, loadMore, loadingMore, setSelectedSeasons} = useGet({
    uri: GET.GAMES,
    hasPagination: true,
    getData: res => res.data.data,
  });
  const onSelectedItemsChange = selectedItems => {
    setSelectedItems(selectedItems);
  };
  onsubmit = () => {
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
  };
  return (
    <>
      <Header title="Games" />
      <StatusBlock loading={loading}>
        <Container>
          <ScrollView style={styles.General.horizontalPadding}>
            <MultiSelect
              styleMainWrapper={styles.General.shadow}
              styleListContainer={styles.General.lightYellowBackground}
              styleDropdownMenuSubsection={[
                styles.General.transparentBackground,
                styles.General.shadow,
                styles.Elements.dropDownMenuBorder,
              ]}
              searchInputStyle={styles.Layout.margin}
              search
              hideDropdown
              hideTags
              onToggleList={() => onsubmit()}
              items={seasons(2019 - 40)}
              uniqueKey="id"
              onSelectedItemsChange={onSelectedItemsChange}
              selectedItems={selectedItems}
              selectText="  Pick Items"
              searchInputPlaceholderText="  Search Items..."
              altFontFamily={tahomaFont}
              selectedItemTextColor={Colors.GRAY}
              selectedItemIconColor={Colors.GRAY}
              displayKey="name"
              searchInputStyle={[styles.Elements.summary, styles.Layout.margin]}
              submitButtonColor={Colors.LIGHT_BLUE}
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
        </Container>
      </StatusBlock>
    </>
  );
};
export default index;
