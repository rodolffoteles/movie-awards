import * as ActionTypes from './types';

export const addMovie = (movie, rank) => {
  return {
    type: ActionTypes.ADD_MOVIE,
    payload: {
      movie,
      rank,
    },
  };
};

export const removeMovie = rank => {
  return {
    type: ActionTypes.REMOVE_MOVIE,
    payload: {
      rank,
    },
  };
};

export const showSheet = rank => {
  return {
    type: ActionTypes.SHOW_SHEET,
    payload: {
      rank,
    },
  };
};

export const hideSheet = () => {
  return {
    type: ActionTypes.HIDE_SHEET,
  };
};
