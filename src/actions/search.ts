import type { Movie } from '../types';
import type { RootState } from '../store';
import type { ThunkAction } from 'redux-thunk';
import * as ActionTypes from '../constants/actionTypes';
import { fetchMovies } from '../services/search';

export interface SearchMovieRequestAction {
  type: typeof ActionTypes.SEARCH_MOVIE_REQUEST;
}

export interface SearchMovieSuccessAction {
  type: typeof ActionTypes.SEARCH_MOVIE_SUCCESS;
  payload: { movies: Movie[] };
}

export interface SearchMovieErrorAction {
  type: typeof ActionTypes.SEARCH_MOVIE_ERROR;
  payload: { error: { code?: number; message: string } };
}

export interface SetSearchTermAction {
  type: typeof ActionTypes.SET_SEARCH_TERM;
  payload: { searchTerm: string };
}

export interface SetSearchTermAction {
  type: typeof ActionTypes.SET_SEARCH_TERM;
  payload: { searchTerm: string };
}

export interface ResetSearchAction {
  type: typeof ActionTypes.RESET_SEARCH;
}

export type SearchAction =
  | SearchMovieRequestAction
  | SearchMovieSuccessAction
  | SearchMovieErrorAction
  | SetSearchTermAction
  | ResetSearchAction;

export const setSearchTerm = (searchTerm: string): SetSearchTermAction => {
  return {
    type: ActionTypes.SET_SEARCH_TERM,
    payload: { searchTerm },
  };
};

export const resetSearch = (): ResetSearchAction => {
  return {
    type: ActionTypes.RESET_SEARCH,
  };
};

export const searchMovie = (): ThunkAction<
  void,
  RootState,
  void,
  SearchAction
> => async (dispatch, getState) => {
  dispatch(searchMovieRequest());

  const { search: searchState } = getState();
  const response = await fetchMovies(searchState.searchTerm);

  if (response.status == 'error') {
    dispatch(searchMovieError(response.error));
  }

  if (response.status == 'success') {
    dispatch(searchMovieSuccess(response.data.movies));
  }
};

const searchMovieRequest = (): SearchMovieRequestAction => {
  return {
    type: ActionTypes.SEARCH_MOVIE_REQUEST,
  };
};

const searchMovieSuccess = (movies: Movie[]): SearchMovieSuccessAction => {
  return {
    type: ActionTypes.SEARCH_MOVIE_SUCCESS,
    payload: { movies },
  };
};

const searchMovieError = (
  error: SearchMovieErrorAction['payload']['error']
): SearchMovieErrorAction => {
  return {
    type: ActionTypes.SEARCH_MOVIE_ERROR,
    payload: { error },
  };
};
