import type { Movie } from '../types';
import type { SearchAction } from '../actions/search';
import {
  SET_SEARCH_TERM,
  SEARCH_MOVIE_REQUEST,
  SEARCH_MOVIE_ERROR,
  SEARCH_MOVIE_SUCCESS,
  RESET_SEARCH,
} from '../constants/actionTypes';

interface SearchState {
  isLoading: boolean;
  error?: { code?: number; message: string };
  searchTerm: string;
  searchResult: Movie[];
}

const INITIAL_STATE: SearchState = {
  isLoading: false,
  searchTerm: '',
  searchResult: [],
};

export default (state = INITIAL_STATE, action: SearchAction): SearchState => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return { ...state, searchTerm: action.payload.searchTerm };
    case SEARCH_MOVIE_REQUEST:
      return { ...state, isLoading: true };
    case SEARCH_MOVIE_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
        searchResult: [],
      };
    case SEARCH_MOVIE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: undefined,
        searchResult: action.payload.movies,
      };
    case RESET_SEARCH:
      return INITIAL_STATE;
    default:
      return state;
  }
};
