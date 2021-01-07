import * as ActionTypes from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.RANK_MOVIE:
      return { ...state, [action.payload.rank]: action.payload.movie };
    case ActionTypes.UNRANK_MOVIE:
      const { [action.payload.rank]: _, ...rest } = state;
      return rest;
    default:
      return state;
  }
};
