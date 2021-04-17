import {useState, useEffect} from 'react';
import {Client} from 'LigaDataTask/services/config/clients';
import {buildUrl} from '../helper';
import {POST} from '../config/api';
import GamePhoto1 from 'LigaDataTask/assets/images/game_photo_1.jpeg';
import GamePhoto2 from 'LigaDataTask/assets/images/game_photo_2.jpeg';
import GamePhoto3 from 'LigaDataTask/assets/images/game_photo_3.jpeg';
import GamePhoto4 from 'LigaDataTask/assets/images/game_photo_4.jpeg';
import GamePhoto5 from 'LigaDataTask/assets/images/game_photo_5.jpeg';
import GamePhoto6 from 'LigaDataTask/assets/images/game_photo_6.jpeg';
import GamePhoto7 from 'LigaDataTask/assets/images/game_photo_7.jpeg';

import _ from 'lodash';

/**
 *
 * @param {import('./interface').LigaDataTaskRequest} config
 */
export const useRequest = ({
  uri,
  query = {},
  defaultBody = {},
  method = 'GET',
  client = Client,
  hasPagination = false,
  getData = res => res.data,
  getPagination = res => res.data.meta,
  automatic = true,
  params = [],
}) => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(200);
  const [loading, setLoading] = useState(automatic);
  const [loadingMore, setLoadingMore] = useState(false);
  const [pagination, setPagination] = useState({});
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSeasons, setSelectedSeasons] = useState(null);

  /**
   *
   * @param {*} page
   *
   * @returns {import('axios').AxiosResponse}
   */
  const fetchData = async (page = null, body = {}) => {
    try {
      let queryToSend = {...query};
      if (typeof page == 'number') {
        page = page;
      }

      if (method == 'GET') {
        const res =
          selectedSeasons != null
            ? await client.request({
                url: buildUrl(uri + '?page=' + page + '&' + selectedSeasons),

                method,
              })
            : await client.request({
                url: buildUrl(uri + '?page=' + page + '&search=' + searchQuery),
                method,
              });

        setStatus(200);
        return res;
      } else {
        const res = await client.request({
          url: buildUrl(uri, queryToSend, params),
          data: {...defaultBody, ...body},
          method,
        });
        setStatus(200);
        return res;
      }
    } catch (e) {
      if (e.response) {
        setStatus(e.response.status);
      }

      throw new Error(e);
    }
  };
  /**
   *
   */
  const doFetchData = async (body = {}) => {
    let res = null;
    try {
      setPage(1);
      setLoading(true);
      const page = hasPagination ? 1 : null;
      res = await fetchData(page, body);
      const data = getData(res);
      const pagination = getPagination(res);
      setData(data);
      setPagination(res.data.meta);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.error(e);
    }
    return res;
  };

  /**
   *
   */
  useEffect(() => {
    if (automatic) {
      doFetchData();
    }
  }, [buildUrl(uri, query, params), automatic, searchQuery, selectedSeasons]);

  const loadMore = async () => {
    // On loadMore if there are more pages.
    if (pagination != undefined) {
      if (page < pagination.total_pages && !loadingMore && !loading) {
        try {
          setLoadingMore(true);
          setPage(page + 1);
          const res = await fetchData(page + 1);
          const data = getData(res);
          const pagination = getPagination(res);
          setData(prev => [...prev, ...data]);
          setPagination(res.data.meta);
          setLoadingMore(false);
        } catch (e) {
          setLoadingMore(false);
          console.error(e);
        }
      }
    }
  };
  return {
    data,
    setData,
    loading,
    status,
    loadMore,
    loadingMore,
    pagination,
    page,
    setPage,
    searchQuery,
    setSearchQuery,
    setSelectedSeasons,
    fetch: doFetchData,
  };
};

/**
 *
 * @param {import('./interface').LigaDataTaskRequest} config
 */
export const useGet = config => useRequest({...config, method: 'GET'});

/**
 *
 * @param {import('./interface').LigaDataTaskRequest} config
 */
export const usePost = (config, automatic = false) =>
  useRequest({...config, method: 'POST', automatic});

export const useRandomlyPhoto = ({}) => {
  const photos = [
    GamePhoto1,
    GamePhoto2,
    GamePhoto3,
    GamePhoto4,
    GamePhoto5,
    GamePhoto6,
    GamePhoto7,
  ];
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState(photos[3]);

  useEffect(() => {
    changePhoto();
  }, [selectedPhoto]);
  const changePhoto = () => {
    const randomNumber = Math.floor(Math.random() * photos.length);
    setCurrentPhotoIndex(randomNumber);
    setSelectedPhoto(photos[currentPhotoIndex]);
  };

  return {
    selectedPhoto,
  };
};
