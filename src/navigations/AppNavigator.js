import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import UsersNavigator from './UsersNavigator';
import {useSelector} from 'react-redux';
import SplashScreenNavigator from './SplashScreenNavigator';

const AppNavigator = () => {
  const Stack = createStackNavigator();
  const showGifImage = useSelector(state => state.showGifImage);

  return (
    <Stack.Navigator headerMode={false}>
      {showGifImage == 'yes' ? (
        <Stack.Screen name="Users" component={SplashScreenNavigator} />
      ) : (
        <Stack.Screen name="Users" component={UsersNavigator} />
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
