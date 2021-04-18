import type { Movie } from '../types';
import { RANK_MOVIE, UNRANK_MOVIE } from '../constants/actionTypes';

export interface RankMovieAction {
  type: typeof RANK_MOVIE;
  payload: { rank: number; movie: Movie };
}

export interface UnrankMovieAction {
  type: typeof UNRANK_MOVIE;
  payload: { rank: number };
}

export type RankingAction = RankMovieAction | UnrankMovieAction;

export const rankMovie = (movie: Movie, rank: number): RankMovieAction => {
  return {
    type: RANK_MOVIE,
    payload: { movie, rank },
  };
};

export const unrankMovie = (rank: number): UnrankMovieAction => {
  return {
    type: UNRANK_MOVIE,
    payload: { rank },
  };
};
