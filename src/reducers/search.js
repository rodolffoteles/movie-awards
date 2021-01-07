import * as ActionTypes from '../actions/types';

const initialState = {
  isLoading: false,
  error: null,
  searchResult: [],
};

export default (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_MOVIE_REQUEST:
      return { ...state, isLoading: true };
    case ActionTypes.FETCH_MOVIE_ERROR:
      return { ...state, isLoading: false, error: action.payload.error };
    case ActionTypes.FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        searchResult: action.payload.search,
      };
    case ActionTypes.HIDE_SIDE_PANEL:
      return initialState;
    default:
      return state;
  }
};
