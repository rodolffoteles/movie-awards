import { FETCH_API } from '../actions/types';
import api from '../services/api';

const apiMiddleware = ({ dispatch }) => next => async action => {
  if (action.type !== FETCH_API) return next(action);

  const { url, params, REQUEST, SUCCESS, ERROR } = action.payload;

  try {
    dispatch({ type: REQUEST });

    const response = await api.get(url, { params: params });

    if (response.status >= 300) {
      dispatch({ type: ERROR, payload: { error: response.status } });
    } else if (response.data.response !== 'True') {
      // Since the API does not use the HTTP status 404 code to indicate
      // that the resource is not found. It's necessary to set the empty
      // array as a searching result.
      dispatch({ type: SUCCESS, payload: { search: [] } });
    } else {
      dispatch({ type: SUCCESS, payload: response.data });
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: { error: error.message } });
  }
};

export default apiMiddleware;
