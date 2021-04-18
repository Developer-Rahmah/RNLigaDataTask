import styles from 'LigaDataTask/assets/styles';
import {setShowGifImageAction} from 'LigaDataTask/services/redux/actions';
import React, {useState} from 'react';
import FastImage from 'react-native-fast-image';
import {useDispatch} from 'react-redux';

const index = () => {
  const dispatch = useDispatch();

  return (
    <>
      <FastImage
        style={styles.General.fullScreen}
        source={{
          uri: 'https://media2.giphy.com/media/2rAF9INPwE6ci7LHej/source.gif', //give your url here
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
        onLoad={() => {
          setTimeout(() => {
            dispatch(setShowGifImageAction('no'));
          }, 1800);
        }}
      />
    </>
  );
};
export default index;
