import type { Movie, Ranking } from '../../types';

import { Wrapper, MovieListItem } from './styles';

interface MovieListProps {
  /** List of movies to be displayed */
  movies: Movie[];
  /**  */
  onAdd?(movie: Movie): void;

  ranking: Ranking;
}

const MovieList = ({ movies, onAdd, ranking }: MovieListProps): JSX.Element => {
  const handleAddMovie = (movie: Movie) => {
    onAdd?.(movie);
  };

  const isMovieAlreadySelected = (imdbId: string) =>
    Object.values(ranking).some(movie => movie.imdbId === imdbId);

  return (
    <Wrapper>
      {movies.map((movie, index) => (
        <MovieListItem key={index}>
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
