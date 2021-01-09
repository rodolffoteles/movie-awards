import * as ActionTypes from './types';

export const setSearchTerm = searchTerm => {
  return {
    type: ActionTypes.SET_SEARCH_TERM,
    payload: { searchTerm },
  };
};

export const searchMovie = title => {
  return {
    type: ActionTypes.FETCH_API,
    payload: {
      url: '/',
      params: { s: title },
      REQUEST: ActionTypes.SEARCH_MOVIE_REQUEST,
      SUCCESS: ActionTypes.SEARCH_MOVIE_SUCCESS,
      ERROR: ActionTypes.SEARCH_MOVIE_ERROR,
    },
    meta: {
      debounce: 50,
    },
  };
};
