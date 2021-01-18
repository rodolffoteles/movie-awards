import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rankMovie, hideSidePanel } from '../../actions';
import { Wrapper, MovieListItem } from './styles';

const MovieList = ({ movies }) => {
  const dispatch = useDispatch();
  const selectedRank = useSelector(state => state.ui.selectedRank);

  const ranking = useSelector(state => state.ranking);

  const handleAddMovie = movie => {
    dispatch(rankMovie(movie, selectedRank));
    dispatch(hideSidePanel());
  };

  const isMovieAlreadySelected = imdbId =>
    Object.values(ranking).some(movie => movie.imdbId === imdbId);

  return (
    <Wrapper>
      {movies.map(movie => (
        <MovieListItem key={movie.imdbId}>
          <img src={movie.poster} alt={`${movie.title} poster`} />
          <div>
            <h3>{movie.title}</h3>
            <div>{movie.year}</div>
            <div>{movie.actors}</div>
          </div>

          <button
            title="Add movie"
            onClick={() => handleAddMovie(movie)}
            disabled={isMovieAlreadySelected(movie.imdbId)}
          >
            +
          </button>
        </MovieListItem>
      ))}
    </Wrapper>
  );
};

export default MovieList;
