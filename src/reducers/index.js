import { combineReducers } from 'redux';
import moviesReducer from './movies';
import sheetReducer from './sheet';

export default combineReducers({
  movies: moviesReducer,
  sheet: sheetReducer,
});
