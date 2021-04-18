import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from 'LigaDataTask/src/navigations/HomeStack';
import BottomTab from 'LigaDataTask/src/layout/BottomTab';
import PlayersStack from 'LigaDataTask/src/navigations/PlayersStack';
import GamesStack from 'LigaDataTask/src/navigations/GamesStack';

const Tab = createBottomTabNavigator();

const UsersNavigator = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomTab {...props} />}>
      <Tab.Screen
        name="Teams"
        component={HomeStack}
        options={{
          tabBarIcon: require('LigaDataTask/assets/icons/teams.png'),
        }}
      />
      <Tab.Screen
        name="Players"
        component={PlayersStack}
        options={{
          tabBarIcon: require('LigaDataTask/assets/icons/players.png'),
        }}
      />

      <Tab.Screen
        name="Games"
        component={GamesStack}
        options={{
          tabBarIcon: require('LigaDataTask/assets/icons/flaming_football.png'),
        }}
      />
    </Tab.Navigator>
  );
};

export default UsersNavigator;
