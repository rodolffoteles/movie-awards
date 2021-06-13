import { useDispatch, useSelector } from 'react-redux';
import { rankMovie } from '../../actions/ranking';
import { resetSearch } from '../../actions/search';
import { hideSidePanel } from '../../actions/ui';

import type { RootState } from '../../store';
import type { Movie } from '../../types';

import { Wrapper, MovieListItem } from './styles';

interface MovieListProps {
  movies: Movie[];
}

const MovieList = ({ movies }: MovieListProps): JSX.Element => {
  const dispatch = useDispatch();
  const selectedRank = useSelector((state: RootState) => state.ui.selectedRank);

  const ranking = useSelector((state: RootState) => state.ranking);

  const handleAddMovie = (movie: Movie) => {
    if (selectedRank) {
      dispatch(rankMovie(movie, selectedRank));
    }

    dispatch(hideSidePanel());
    dispatch(resetSearch());
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
