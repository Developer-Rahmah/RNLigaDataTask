import React from 'react';
import {Image} from 'react-native';
import Styles from 'LigaDataTask/assets/styles';
import {htmlDecode} from 'LigaDataTask/services/helper';
import Teams from 'LigaDataTask/assets/icons/teams.png';

const TeaserImage = ({source}) => {
  return (
    <Image
      source={source ? source : Teams}
      style={Styles.ImageStyles.smallTeaserImage}
    />
  );
};

export default TeaserImage;
