import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMovie, hideSheet } from '../../actions';
import { Wrapper, MovieListItem } from './styles';

const MovieList = ({ movies }) => {
  const dispatch = useDispatch();
  const selectedRank = useSelector(state => state.sheet.selectedRank);

  const handleAddMovie = movie => {
    dispatch(addMovie(movie, selectedRank));
    dispatch(hideSheet());
  };

  return (
    <Wrapper>
      {movies.map(movie => (
        <MovieListItem key={movie.imdbId}>
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
        </MovieListItem>
      ))}
    </Wrapper>
  );
};

export default MovieList;
