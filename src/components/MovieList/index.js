import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMovie, hideSheet } from '../../actions';
import { Wrapper, MovieItem } from './styles';

// TODO: Get result from OMDB API
const MOVIES_RESULT = [
  {
    imdb_id: 'tt0892769',
    title: 'How to Train Your Dragon',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_SX300.jpg',
    year: 2019,
    actors: 'Jay Baruchel, Gerard Butler, Craig Ferguson, America Ferrera',
  },
  {
    imdb_id: 'tt0892799',
    title: 'Let the Right One In',
    poster:
      'https://m.media-amazon.com/images/M/MV5BOWM4NTY2NTMtZDZlZS00NTgyLWEzZDMtODE3ZGI1MzI3ZmU5XkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_SX300.jpg',
    year: 2019,
    actors: 'Jay Baruchel, Gerard Butler',
  },
];

const MovieList = () => {
  const dispatch = useDispatch();
  const selectedRank = useSelector(state => state.sheet.selectedRank);

  const handleAddMovie = movie => {
    dispatch(addMovie(movie, selectedRank));
    dispatch(hideSheet());
  };

  return (
    <Wrapper>
      {MOVIES_RESULT.map(movie => (
        <MovieItem key={movie.imdb_id}>
          <img src={movie.poster} />
          <div>
            <h3>{movie.title}</h3>
            <div>{movie.year}</div>
            <div>{movie.actors}</div>
          </div>

          <button
            title="Add movie"
            onClick={() => {
              handleAddMovie(movie);
            }}
          >
            +
          </button>
        </MovieItem>
      ))}
    </Wrapper>
  );
};

export default MovieList;
