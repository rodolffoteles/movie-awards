import * as ActionTypes from '../actions/types';

//TODO: Remove this mock data
const INITIAL_STATE = {
  1: {
    id: 1646,
    title: 'How to Train Your Dragon',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_SX300.jpg',
  },
  2: {
    id: 2,
    title: "A Dog's will",
    poster:
      'https://m.media-amazon.com/images/M/MV5BOTNlZTkxOGUtMmI0MC00MzVjLWE4NzQtNjRjMzNjMzRmMWUyXkEyXkFqcGdeQXVyMTkzODUwNzk@._V1_SX300.jpg',
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.ADD_MOVIE:
      return { ...state, [action.payload.rank]: action.payload.movie };
    case ActionTypes.REMOVE_MOVIE:
      let { [action.payload.rank]: _, ...rest } = state;
      return rest;
    default:
      return state;
  }
};
