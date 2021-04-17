import Styles from 'LigaDataTask/assets/styles';
import React from 'react';
import {Image} from 'react-native';
import Colors from 'LigaDataTask/assets/styles/Colors';
const IconImage = ({source, color = Colors.darkGray, mediumIcon = false}) => (
  <Image
    source={source}
    style={[
      mediumIcon ? Styles.ImageStyles.mediumIcon : Styles.ImageStyles.iconImage,
      {tintColor: color},
    ]}
  />
);
export default IconImage;
