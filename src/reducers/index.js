import { combineReducers } from 'redux';
import moviesReducer from './movies';
import uiReducer from './ui';

export default combineReducers({
  movies: moviesReducer,
  ui: uiReducer,
});
