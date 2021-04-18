import React from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styles from 'LigaDataTask/assets/styles';
import Details from 'LigaDataTask/src/general/Details';
import DetailsImage from 'LigaDataTask/src/images/DetailsImage';
import Title from 'LigaDataTask/src/elements/Title';
import Card from 'LigaDataTask/src/general/Card';
import Colors from 'LigaDataTask/assets/styles/Colors';
import Container from 'LigaDataTask/src/general/Container';
import Loader from 'LigaDataTask/src/general/Loader';

const GameDetails = ({item, cover}) => {
  return (
    <>
      <ScrollView style={[styles.General.lightYellowBackground]}>
        {item.home_team != undefined ? (
          <>
            <DetailsImage source={cover} />
            <View
              style={[
                styles.General.largePadding,
                styles.General.justifyContentCenter,
              ]}>
              <Card>
                <Title bold color={Colors.BLACK} title={'Home team:'} />
                <Title color={Colors.BLACK} title={item.home_team.name} />
              </Card>
              <Details
                title="team Name"
                description={item.home_team.full_name}
              />
              <Details title="Team city" description={item.home_team.city} />
              <Details
                title="Team division"
                description={item.home_team.division}
              />
              <Details title="Team score" description={item.home_team_score} />
              <Details title="Status" description={item.status} />
              <Details title="Season" description={item.season} />
              <Card style={styles.General.paddingTop}>
                <Title bold color={Colors.BLACK} title={'Visitor team:'} />
                <Title color={Colors.BLACK} title={item.visitor_team.name} />
              </Card>
              <Details
                title="Team name"
                description={item.visitor_team.full_name}
              />
              <Details title="Team city" description={item.visitor_team.city} />
              <Details
                title="Team division"
                description={item.visitor_team.division}
              />
              <Details
                title="Team score"
                description={item.visitor_team_score}
              />
              <Details title="Status" description={item.status} />
              <Details title="Season" description={item.season} />
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

export default GameDetails;
