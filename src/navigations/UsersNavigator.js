import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from 'LigaDataTask/src/navigations/HomeStack';
import BottomTab from 'LigaDataTask/src/layout/BottomTab';
import Search from 'LigaDataTask/src/screens/search/index';
import PlayersStack from './PlayersStack';
const Tab = createBottomTabNavigator();

const UsersNavigator = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomTab {...props} />}>
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
        name="Search"
        component={Search}
        options={{
          tabBarIcon: require('LigaDataTask/assets/icons/search.png'),
        }}
      />
    </Tab.Navigator>
  );
};

export default UsersNavigator;
