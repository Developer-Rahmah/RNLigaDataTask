import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import UsersNavigator from './UsersNavigator';

const AppNavigator = () => {
  const Stack = createStackNavigator();
  

  return (
    <Stack.Navigator headerMode={false}>
      <Stack.Screen name="Users" component={UsersNavigator} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
