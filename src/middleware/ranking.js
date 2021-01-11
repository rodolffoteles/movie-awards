import { showModal } from '../actions';
import { RANK_MOVIE } from '../actions/types';

const rankMiddleware = ({ dispatch, getState }) => next => action => {
  next(action);

  if (action.type === RANK_MOVIE) {
    console.log('CHEGUEI AQUI');
    const { ranking } = getState();
    const rankedMoviesCount = Object.keys(ranking).length;
    if (rankedMoviesCount === 5) dispatch(showModal());
  }
};

export default rankMiddleware;
