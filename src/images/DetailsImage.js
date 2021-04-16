import Styles from 'LigaDataTask/assets/styles';
import {htmlDecode} from 'LigaDataTask/services/helper';
import React from 'react';
import {Image} from 'react-native';

const DetailsImage = ({source, uri}) => {
  return (
    <Image
      source={source ? source : {uri: htmlDecode(uri)}}
      style={Styles.ImageStyles.posterImage}
    />
  );
};

export default DetailsImage;
