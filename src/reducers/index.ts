import { combineReducers } from 'redux';
import rankingReducer from './ranking';
import searchReducer from './search';
import uiReducer from './ui';

const rootReducer = combineReducers({
  ranking: rankingReducer,
  search: searchReducer,
  ui: uiReducer,
});

export default rootReducer;
