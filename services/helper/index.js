import _ from 'lodash';
import GamePhoto1 from 'LigaDataTask/assets/images/game_photo_1.jpeg';
import GamePhoto2 from 'LigaDataTask/assets/images/game_photo_2.jpeg';
import GamePhoto3 from 'LigaDataTask/assets/images/game_photo_3.jpeg';
import GamePhoto4 from 'LigaDataTask/assets/images/game_photo_4.jpeg';
import GamePhoto5 from 'LigaDataTask/assets/images/game_photo_5.jpeg';
import GamePhoto6 from 'LigaDataTask/assets/images/game_photo_6.jpeg';
import GamePhoto7 from 'LigaDataTask/assets/images/game_photo_7.jpeg';
import {useEffect, useState} from 'react';

/**
 *
 * @param {*} uri
 * @param {*} query
 */
export const buildUrl = (uri, query = {}, params = []) => {
  let queryString = '';
  let paramString = '';

  params.forEach(param => {
    paramString = `${paramString}/${param}`;
  });

  Object.keys(query).map(key => {
    queryString = `${queryString}&${key}=${query[key]}`;
  });
  const t = `${uri}${paramString}${queryString}`;
  return `${uri}${paramString}${queryString}`;
};

export const roundNumber = number =>
  Math.round((number + Number.EPSILON) * 10) / 10;

/**
 *
 * @param {string} input
 */
export const htmlDecode = input =>
  input != undefined ? input.replace('&amp;', '&') : null;

export const randomlyPhoto = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const photos = [
    GamePhoto1,
    GamePhoto2,
    GamePhoto3,
    GamePhoto4,
    GamePhoto5,
    GamePhoto6,
    GamePhoto7,
  ];
  useEffect(() => {
    changePhoto();
  }, []);
  const changePhoto = () => {
    const randomNumber = Math.floor(Math.random() * photos.length);
    setCurrentPhotoIndex(randomNumber);
  };
  return photos[currentPhotoIndex];
};
