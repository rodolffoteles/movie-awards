import React from 'react';
import { useDispatch } from 'react-redux';
import { unrankMovie, showSidePanel } from '../../actions';
import { Wrapper, DeleteButton, AddButton, Description } from './styles';

const MovieCard = ({ rank, movie }) => {
  const dispatch = useDispatch();

  const handleRemoveMovie = () => {
    dispatch(unrankMovie(rank));
  };

  const handleAddMovie = () => {
    dispatch(showSidePanel(rank));
  };

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
