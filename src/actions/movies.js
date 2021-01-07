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
