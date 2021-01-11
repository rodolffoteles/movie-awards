import * as ActionTypes from '../actions/types';

const INITIAL_STATE = {
  sidePanelIsOpen: false,
  modalIsOpen: false,
  selectedRank: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_SIDE_PANEL:
      return {
        ...state,
        sidePanelIsOpen: true,
        selectedRank: action.payload.rank,
      };
    case ActionTypes.HIDE_SIDE_PANEL:
      return {
        ...state,
        sidePanelIsOpen: false,
        selectedRank: null,
      };
    case ActionTypes.SHOW_MODAL:
      return {
        ...state,
        modalIsOpen: true,
      };
    case ActionTypes.HIDE_MODAL:
      return {
        ...state,
        modalIsOpen: false,
      };
    default:
      return state;
  }
};
