import React from 'react';
import {View} from 'react-native';
import styles from 'LigaDataTask/assets/styles';
import DetailsImage from 'LigaDataTask/src/images/DetailsImage';
import Details from 'LigaDataTask/src/general/Details';
import {ScrollView} from 'react-native-gesture-handler';
import FootballPlayer from 'LigaDataTask/assets/images/football_player.png';
import {Container} from 'native-base';
import Loader from 'LigaDataTask/src/general/Loader';

const PlayerDetails = ({item}) => {
  return (
    <>
      <ScrollView style={[styles.General.lightYellowBackground]}>
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
            <Loader />
          </Container>
        )}
      </ScrollView>
    </>
  );
};

export default PlayerDetails;
