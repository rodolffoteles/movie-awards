import * as ActionTypes from './types';

export const searchMovies = title => {
  return {
    type: ActionTypes.FETCH_API,
    payload: {
      url: '/',
      params: { s: title },
      REQUEST: ActionTypes.FETCH_MOVIE_REQUEST,
      SUCCESS: ActionTypes.FETCH_MOVIE_SUCCESS,
      ERROR: ActionTypes.FETCH_MOVIE_ERROR,
    },
    meta: {
      debounce: 50,
    },
  };
};
