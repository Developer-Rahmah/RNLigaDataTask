import styles from 'LigaDataTask/assets/styles';
import Colors from 'LigaDataTask/assets/styles/Colors';
import IconImage from 'LigaDataTask/src/images/IconImage';
import React from 'react';
import {TouchableOpacity} from 'react-native';

/**
 *
 * @param {import('react-native').TouchableOpacityProps|{icon,focused,label}} param0
 */
const BottomTabButton = ({icon, focused, label, ...rest}) => {
  return (
    <TouchableOpacity
      style={[
        styles.Elements.bottomTabButtonContainer,
        {borderTopColor: focused ? Colors.LIGHT_GREEN : Colors.LIGHT_GRAY},
      ]}
      {...rest}>
      <IconImage
        mediumIcon
        source={icon}
        color={focused ? Colors.LIGHT_GREEN : Colors.GRAY}
      />
    </TouchableOpacity>
  );
};

export default BottomTabButton;
