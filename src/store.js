import { createStore, applyMiddleware, compose } from 'redux';
import debounce from './middleware/debouce';
import api from './middleware/api';
import rootReducer from './reducers';

const composeEnhancers =
  (process.env.NODE_ENV === 'development' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(debounce, api))
);

export default store;
