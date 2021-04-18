import { useDispatch } from 'react-redux';
import { unrankMovie } from '../../actions/ranking';
import { showSidePanel } from '../../actions/ui';

import type { Movie } from '../../types';
import { Wrapper, DeleteButton, AddButton, Description } from './styles';

interface MovieCardProps {
  rank: number;
  movie: Movie;
}

const MovieCard = ({ rank, movie }: MovieCardProps): JSX.Element => {
  const dispatch = useDispatch();
  const handleRemoveMovie = () => dispatch(unrankMovie(rank));
  const handleAddMovie = () => dispatch(showSidePanel(rank));

  return (
    <Wrapper>
      {movie ? (
        <>
          <DeleteButton onClick={handleRemoveMovie}>&times;</DeleteButton>
          <img src={movie.poster} alt={movie.title} />
        </>
      ) : (
        <AddButton onClick={handleAddMovie}>+</AddButton>
      )}
      <Description>
        <h1>{rank}</h1>
        {movie && movie.title}
      </Description>
    </Wrapper>
  );
};

export default MovieCard;
