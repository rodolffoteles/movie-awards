import { FETCH_API } from '../actions/types';
import api from '../services/api';

const apiMiddleware = ({ dispatch }) => next => async action => {
  if (action.type !== FETCH_API) return next(action);

  const { url, params, REQUEST, SUCCESS, ERROR } = action.payload;

  try {
    dispatch({ type: REQUEST });

    const response = await api.get(url, { params: params });

    if (response.status >= 300) {
      dispatch({ type: ERROR, payload: response.status });
    } else {
      dispatch({ type: SUCCESS, payload: response.data });
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error });
  }
};

export default apiMiddleware;
