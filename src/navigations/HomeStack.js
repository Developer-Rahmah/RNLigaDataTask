import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Teams from 'LigaDataTask/src/screens/teams/index';
import TeamDetails from 'LigaDataTask/src/screens/teams/details/index';

const Stack = createStackNavigator();
export default class HomeStack extends Component {
  render() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Teams">
        <Stack.Screen name="Teams" component={Teams} />
        <Stack.Screen name="TeamDetails" component={TeamDetails} />
      </Stack.Navigator>
    );
  }
}
