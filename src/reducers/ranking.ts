import type { Movie } from '../types';
import { RANK_MOVIE, UNRANK_MOVIE } from '../constants/actionTypes';
import { RankingAction } from '../actions/ranking';

interface RankingState {
  [rank: number]: Movie;
}

export default (
  state: RankingState = {},
  action: RankingAction
): RankingState => {
  switch (action.type) {
    case RANK_MOVIE:
      return { ...state, [action.payload.rank]: action.payload.movie };
    case UNRANK_MOVIE: {
      const { [action.payload.rank]: _, ...rest } = state;
      return rest;
    }
    default:
      return state;
  }
};
