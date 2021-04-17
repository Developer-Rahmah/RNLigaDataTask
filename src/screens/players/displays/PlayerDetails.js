import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import styles from 'LigaDataTask/assets/styles';
import Colors from 'LigaDataTask/assets/styles/Colors';
import DetailsImage from 'LigaDataTask/src/images/DetailsImage';
import Details from 'LigaDataTask/src/general/Details';
import {ScrollView} from 'react-native-gesture-handler';
import FootballPlayer from 'LigaDataTask/assets/images/football_player.png';
import {Container} from 'native-base';

const PlayerDetails = ({item}) => {
  return (
    <>
      <ScrollView style={[styles.General.darkPurpleBackground]}>
        {item.team != undefined ? (
          <>
            <DetailsImage source={FootballPlayer} />

            <View
              style={[
                styles.General.largePadding,
                styles.General.justifyContentCenter,
              ]}>
              <Details title="Team name" description={item.team.full_name} />
              <Details title="Team City" description={item.team.city} />
              <Details title="Team division" description={item.team.division} />
            </View>
          </>
        ) : (
          <Container
            style={[
              styles.General.transparentBackground,
              styles.Layout.flexCenter,
            ]}>
            <ActivityIndicator size="large" color={Colors.BLACK} />
          </Container>
        )}
      </ScrollView>
    </>
  );
};

export default PlayerDetails;
