import React, {useEffect, useState} from 'react';
import TeamCard from 'LigaDataTask/src/screens/teams/displays/TeamCard';
import Header from 'LigaDataTask/src/layout/Header';
import Rows from 'LigaDataTask/src/general/Rows';
import styles from 'LigaDataTask/assets/styles';
import {ActivityIndicator, Keyboard, View} from 'react-native';
import {API_KEY, client} from 'LigaDataTask/services/config/clients';
import Colors from 'LigaDataTask/assets/styles/Colors';
import EmptyListMessage from 'LigaDataTask/src/general/EmptyListMessage';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Search from 'LigaDataTask/assets/icons/search.png';
import IconImage from 'LigaDataTask/src/images/IconImage';

const index = () => {
  const [data, setData] = useState([]);
  const [success, setSuccess] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {}, []);

  const fetchData = async (query) => {
    setSuccess(true);
    client
      .get(`?apikey=${API_KEY}&q=${query}`)
      .then((res) => {
        if (res.data.success) {
          setSuccess(true);
          setData(res.data.result);
        } else {
          setSuccess(false);
        }
      })
      .catch(function (error) {
        setSuccess(false);
      });
  };
  return (
    <>
      <Header title="Search" />
      <View
        style={[
          styles.Layout.fullWidth,
          styles.Layout.smallCardPadding,
          styles.General.darkPurpleBackground,
        ]}>
        <View
          style={[
            styles.Elements.searchInputContainer,
            styles.General.shadow,
            styles.Layout.flexDirectionRow,
            styles.General.alignItemsCenter,
          ]}>
          <View style={styles.Elements.inputContainer}>
            <TextInput
              style={styles.Elements.input}
              inlineImageLeft="search_icon"
              onChangeText={(text) => {
                fetchData(text), setQuery(text);
              }}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              Keyboard.dismiss(), fetchData(query);
            }}>
            <IconImage source={Search} />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={[
          styles.General.fullScreen,
          styles.General.largePadding,
          styles.General.darkPurpleBackground,
          styles.Elements.searchListingBottomPadding,
          styles.General.justifyContentCenter,
        ]}>
        {success ? (
          data.length > 0 ? (
            <Rows
              keyExtractor={(item) => item.id_track}
              numColumns={2}
              data={data}
              renderItem={({item, index}) => (
                <TeamCard
                  item={item}
                  key={item.id_track}
                  index={index}
                  dataLength={data.length}
                />
              )}
            />
          ) : (
            <ActivityIndicator size="large" color={Colors.WHITE} />
          )
        ) : (
          <EmptyListMessage />
        )}
      </View>
    </>
  );
};
export default index;
