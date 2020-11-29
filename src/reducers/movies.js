import * as ActionTypes from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_MOVIE:
      return { ...state, [action.payload.rank]: action.payload.movie };
    case ActionTypes.REMOVE_MOVIE:
      let { [action.payload.rank]: _, ...rest } = state;
      return rest;
    default:
      return state;
  }
};
