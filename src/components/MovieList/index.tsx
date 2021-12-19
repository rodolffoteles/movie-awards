import type { Movie, Ranking } from '../../types';
import Button from '../Button';
import { ReactComponent as PlusIcon } from '../../assets/svg/plus.svg';
import { Wrapper, MovieListItem, Center } from './styles';

interface MovieListProps {
  /** List of movies to be displayed */
  movies: Movie[];
  /** Call back when movie is selected */
  onAdd?(movie: Movie): void;
  /** Current movie ranking */
  ranking: Ranking;
}

const MovieList = ({ movies, onAdd, ranking }: MovieListProps): JSX.Element => {
  const handleAddMovie = (movie: Movie) => {
    onAdd?.(movie);
  };

  const isMovieAlreadySelected = (imdbId: string) =>
    Object.values(ranking).some(movie => movie.imdbId === imdbId);

  console.log(movies);
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

          <Center>
            <Button
              outline
              icon={<PlusIcon />}
              onClick={() => handleAddMovie(movie)}
              disabled={isMovieAlreadySelected(movie.imdbId)}
            />
          </Center>
        </MovieListItem>
      ))}
    </Wrapper>
  );
};

export default MovieList;
