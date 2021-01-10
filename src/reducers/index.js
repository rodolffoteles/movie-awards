import { combineReducers } from 'redux';
import rankingReducer from './ranking';
import searchReducer from './search';
import uiReducer from './ui';

export default combineReducers({
  ranking: rankingReducer,
  search: searchReducer,
  ui: uiReducer,
});
