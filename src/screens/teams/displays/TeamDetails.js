import React from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styles from 'LigaDataTask/assets/styles';
import Details from 'LigaDataTask/src/general/Details';
import DetailsImage from 'LigaDataTask/src/images/DetailsImage';
import FootballTeams from 'LigaDataTask/assets/images/football_teams.png';

const TeamDetails = ({item, itemCover}) => {
  return (
    <>
      <ScrollView style={[styles.General.darkPurpleBackground]}>
        <DetailsImage source={FootballTeams} />
        <View
          style={[
            styles.General.largePadding,
            styles.General.justifyContentCenter,
          ]}>
          <Details title="Team Name" description={item.full_name} />
          <Details title="Team city" description={item.city} />
          <Details title="Team division" description={item.division} />
        </View>
      </ScrollView>
    </>
  );
};

export default TeamDetails;
