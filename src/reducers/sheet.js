import * as ActionTypes from '../actions/types';

const INITIAL_STATE = {
  open: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_SHEET:
      return {
        open: true,
        selectedRank: action.payload.rank,
      };
    case ActionTypes.HIDE_SHEET:
      return INITIAL_STATE;
    default:
      return state;
  }
};
