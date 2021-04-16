import _ from 'lodash';

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