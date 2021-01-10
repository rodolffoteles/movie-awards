import * as ActionTypes from './types';

export const showSidePanel = rank => {
  return {
    type: ActionTypes.SHOW_SIDE_PANEL,
    payload: { rank },
  };
};

export const hideSidePanel = () => {
  return {
    type: ActionTypes.HIDE_SIDE_PANEL,
  };
};
