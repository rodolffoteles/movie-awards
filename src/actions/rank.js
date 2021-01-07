import * as ActionTypes from './types';

export const rankMovie = (movie, rank) => {
  return {
    type: ActionTypes.RANK_MOVIE,
    payload: { movie, rank },
  };
};

export const unrankMovie = rank => {
  return {
    type: ActionTypes.UNRANK_MOVIE,
    payload: { rank },
  };
};
