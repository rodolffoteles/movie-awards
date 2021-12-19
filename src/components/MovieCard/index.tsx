import type { Movie } from '../../types';
import {
  Wrapper,
  ButtonWrapper,
  AddButton,
  Description,
  RankingNumber,
} from './styles';
import Button from '../Button';
import { ReactComponent as CloseIcon } from '../../assets/svg/close.svg';

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

  const moviePosterMarkup = movie ? (
    <>
      <ButtonWrapper>
        <Button
          icon={<CloseIcon />}
          onClick={handleRemoveMovie}
          size="small"
          color="danger"
        />
      </ButtonWrapper>

      <img src={movie.poster} alt={movie.title} />
    </>
  ) : (
    <AddButton onClick={handleAddMovie}>+</AddButton>
  );

  return (
    <Wrapper>
      {moviePosterMarkup}
      <Description>
        <RankingNumber>{rank}</RankingNumber>
        {movie?.title}
      </Description>
    </Wrapper>
  );
};

export default MovieCard;
