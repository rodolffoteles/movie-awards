import * as ActionTypes from '../actions/types';

const INITIAL_STATE = {
  sidePanelIsOpen: true,
  selectedRank: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_SIDE_PANEL:
      return {
        sidePanelIsOpen: true,
        selectedRank: action.payload.rank,
      };
    case ActionTypes.HIDE_SIDE_PANEL:
      return {
        sidePanelIsOpen: false,
        selectedRank: null,
      };
    default:
      return state;
  }
};
