import * as ActionTypes from '../actions/types';

const INITIAL_STATE = {
  searchTerm: '',
  isLoading: false,
  error: null,
  searchResult: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.SET_SEARCH_TERM:
      return { ...state, searchTerm: action.payload.searchTerm };
    case ActionTypes.SEARCH_MOVIE_REQUEST:
      return { ...state, isLoading: true };
    case ActionTypes.SEARCH_MOVIE_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
        searchResult: [],
      };
    case ActionTypes.SEARCH_MOVIE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        searchResult: action.payload.search,
      };
    case ActionTypes.HIDE_SIDE_PANEL:
      return INITIAL_STATE;
    default:
      return state;
  }
};
