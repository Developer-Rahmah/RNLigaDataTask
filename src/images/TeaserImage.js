import React from 'react';
import {Image} from 'react-native';
import Styles from 'LigaDataTask/assets/styles';
import {htmlDecode} from 'LigaDataTask/services/helper';
import Teams from 'LigaDataTask/assets/icons/teams.png';

const TeaserImage = ({source, smallImg=false}) => {
  return (
    <Image
      source={source ? source : Teams}
      style={
        smallImg
          ? Styles.ImageStyles.smallTeaserImage
          : Styles.ImageStyles.teaserImage
      }
    />
  );
};

export default TeaserImage;
