import React from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styles from 'LigaDataTask/assets/styles';
import Details from 'LigaDataTask/src/general/Details';
import DetailsImage from 'LigaDataTask/src/images/DetailsImage';
import FootballTeams from 'LigaDataTask/assets/images/football_teams.png';
import Title from 'LigaDataTask/src/elements/Title';

const GameDetails = ({item}) => {
  return (
    <>
      <ScrollView style={[styles.General.darkPurpleBackground]}>
        <DetailsImage source={FootballTeams} />
        <View
          style={[
            styles.General.largePadding,
            styles.General.justifyContentCenter,
          ]}>
          <Title title={item.home_team} />
          <Details title="Team Name" description={item.full_name} />
          <Details title="Team city" description={item.city} />
          <Details title="Team division" description={item.division} />
        </View>
      </ScrollView>
    </>
  );
};

export default GameDetails;
