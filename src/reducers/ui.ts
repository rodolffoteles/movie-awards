import type { UiAction } from '../actions/ui';
import {
  SHOW_SIDE_PANEL,
  HIDE_SIDE_PANEL,
  SHOW_MODAL,
  HIDE_MODAL,
} from '../constants/actionTypes';

interface UiState {
  sidePanelIsOpen: boolean;
  modalIsOpen: boolean;
  selectedRank: number | null;
}

const INITIAL_STATE: UiState = {
  sidePanelIsOpen: false,
  modalIsOpen: false,
  selectedRank: null,
};

export default (state = INITIAL_STATE, action: UiAction): UiState => {
  switch (action.type) {
    case SHOW_SIDE_PANEL:
      return {
        ...state,
        sidePanelIsOpen: true,
        selectedRank: action.payload.rank,
      };
    case HIDE_SIDE_PANEL:
      return {
        ...state,
        sidePanelIsOpen: false,
        selectedRank: null,
      };
    case SHOW_MODAL:
      return {
        ...state,
        modalIsOpen: true,
      };
    case HIDE_MODAL:
      return {
        ...state,
        modalIsOpen: false,
      };
    default:
      return state;
  }
};
