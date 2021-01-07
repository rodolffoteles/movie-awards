import { combineReducers } from 'redux';
import rankReducer from './rank';
import searchReducer from './search';
import uiReducer from './ui';

export default combineReducers({
  rank: rankReducer,
  search: searchReducer,
  ui: uiReducer,
});
