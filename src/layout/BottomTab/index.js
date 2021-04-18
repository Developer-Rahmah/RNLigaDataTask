import styles from 'LigaDataTask/assets/styles';
import React from 'react';
import {View} from 'react-native';
import BottomTabButton from 'LigaDataTask/src/layout/BottomTab/BottomTabButton';

const BottomTab = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  const tabs = state.routes;
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  return (
    <View style={[styles.Elements.bottomTabContainer]}>
      {tabs.map((route, index) => {
        const {options} = descriptors[route.key];
        const label = options.tabBarLabel;
        const icon = options.tabBarIcon;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <BottomTabButton
            onPress={onPress}
            onLongPress={onLongPress}
            label={label}
            icon={icon}
            focused={isFocused}
            key={route.key}
          />
        );
      })}
    </View>
  );
};

export default BottomTab;
