import axios from 'axios';
import qs from 'qs';
import camelCaseKeys from 'camelcase-keys';

const api = axios.create({
  baseURL: 'https://www.omdbapi.com/',
  paramsSerializer: params => {
    const serializedParams = qs.stringify(params, { arrayFormat: 'repeat' });
    return `${serializedParams}&movie=movie&&apikey=${process.env.REACT_APP_OMDB_API_KEY}`;
  },
  transformResponse: data => {
    return camelCaseKeys(JSON.parse(data), { deep: true });
  },
});

export default api;
