import axios from 'axios';
import camelCaseKeys from 'camelcase-keys';

const api = axios.create({
  baseURL: 'https://www.omdbapi.com/',
  params: {
    apikey: process.env.REACT_APP_OMDB_API_KEY,
  },
  transformResponse: data => {
    return camelCaseKeys(JSON.parse(data), { deep: true });
  },
});

export default api;
