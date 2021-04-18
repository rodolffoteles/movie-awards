import {
  SHOW_SIDE_PANEL,
  HIDE_SIDE_PANEL,
  SHOW_MODAL,
  HIDE_MODAL,
} from '../constants/actionTypes';

export interface ShowSidePanelAction {
  type: typeof SHOW_SIDE_PANEL;
  payload: { rank: number };
}

export interface HideSidePanelAction {
  type: typeof HIDE_SIDE_PANEL;
}

export interface ShowModalAction {
  type: typeof SHOW_MODAL;
}

export interface HideModalAction {
  type: typeof HIDE_MODAL;
}

export type UiAction =
  | ShowSidePanelAction
  | HideSidePanelAction
  | ShowModalAction
  | HideModalAction;

export const showSidePanel = (rank: number): ShowSidePanelAction => {
  return {
    type: SHOW_SIDE_PANEL,
    payload: { rank },
  };
};

export const hideSidePanel = (): HideSidePanelAction => {
  return {
    type: HIDE_SIDE_PANEL,
  };
};

export const showModal = (): ShowModalAction => {
  return {
    type: SHOW_MODAL,
  };
};

export const hideModal = (): HideModalAction => {
  return {
    type: HIDE_MODAL,
  };
};
