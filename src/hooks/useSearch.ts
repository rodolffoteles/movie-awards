import { useReducer } from 'react';
import type { Movie } from '../types';
import { fetchMovies, MOVIE_PER_PAGE } from '../services/search';

interface SearchState {
  isLoading: boolean;
  error?: { code?: number; message: string };
  movies: Movie[];
  currentPage?: number;
  totalPages?: number;
}

interface SearchMovieRequestAction {
  type: typeof SEARCH_MOVIE_REQUEST;
}

interface SearchMovieSuccessAction {
  type: typeof SEARCH_MOVIE_SUCCESS;
  payload: Pick<SearchState, 'movies' | 'currentPage' | 'totalPages'>;
}

interface SearchMovieErrorAction {
  type: typeof SEARCH_MOVIE_ERROR;
  payload: Pick<SearchState, 'error'>;
}

interface ClearSearchAction {
  type: typeof CLEAR_SEARCH;
}

type SearchAction =
  | SearchMovieRequestAction
  | SearchMovieSuccessAction
  | SearchMovieErrorAction
  | ClearSearchAction;

const SEARCH_MOVIE_REQUEST = 'SEARCH_MOVIE_REQUEST';
const SEARCH_MOVIE_SUCCESS = 'SEARCH_MOVIE_SUCCESS';
const SEARCH_MOVIE_ERROR = 'SEARCH_MOVIE_ERROR';
const CLEAR_SEARCH = 'CLEAR_SEARCH';

const INITIAL_STATE: SearchState = {
  isLoading: false,
  movies: [],
};

const searchReducer = (
  state = INITIAL_STATE,
  action: SearchAction
): SearchState => {
  switch (action.type) {
    case SEARCH_MOVIE_REQUEST:
      return { ...state, isLoading: true };
    case SEARCH_MOVIE_ERROR:
      return {
        isLoading: false,
        error: action.payload.error,
        movies: [],
      };
    case SEARCH_MOVIE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: undefined,
        movies: action.payload.movies,
      };
    case CLEAR_SEARCH:
      return INITIAL_STATE;
    default:
      return state;
  }
};

const useSearch = () => {
  const [state, dispatch] = useReducer(searchReducer, INITIAL_STATE);

  const search = async (searchTerm: string) => {
    try {
      dispatch({ type: SEARCH_MOVIE_REQUEST });

      const response = await fetchMovies(searchTerm);

      if (response.status == 'error') {
        const { error } = response;
        dispatch({ type: SEARCH_MOVIE_ERROR, payload: { error } });
        return;
      }

      const { movies, totalCount } = response.data;
      const totalPages = Math.ceil(totalCount / MOVIE_PER_PAGE);
      dispatch({
        type: SEARCH_MOVIE_SUCCESS,
        payload: { movies, currentPage: 1, totalPages },
      });
    } catch (error: any) {
      dispatch({ type: SEARCH_MOVIE_ERROR, payload: error });
    }
  };

  const clearSearch = () => {
    dispatch({ type: CLEAR_SEARCH });
  };

  return { ...state, search, clearSearch };
};

export default useSearch;
