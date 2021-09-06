import type { Movie } from '../../types';
import {
  Wrapper,
  DeleteButton,
  AddButton,
  Description,
  RankingNumber,
} from './styles';

interface MovieCardProps {
  /** Movie ranking */
  rank: number;
  /** Selected movie */
  movie?: Movie;
  /** Callback when adding new movie */
  onAdd?(): void;
  /** Callback when removing the movie */
  onRemove?(): void;
}

const MovieCard = ({
  rank,
  movie,
  onAdd,
  onRemove,
}: MovieCardProps): JSX.Element => {
  const handleRemoveMovie = () => onRemove?.();
  const handleAddMovie = () => onAdd?.();

  const moviePosterMarkuṕ = movie ? (
    <>
      <DeleteButton onClick={handleRemoveMovie}>&times;</DeleteButton>
      <img src={movie.poster} alt={movie.title} />
    </>
  ) : (
    <AddButton onClick={handleAddMovie}>+</AddButton>
  );

  return (
    <Wrapper>
      {moviePosterMarkuṕ}
      <Description>
        <RankingNumber>{rank}</RankingNumber>
        {movie?.title}
      </Description>
    </Wrapper>
  );
};

export default MovieCard;
