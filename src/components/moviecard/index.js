import React from 'react';
import {
  Wrapper,
  Poster,
  DeleteButton,
  AddButton,
  Description,
} from './styles';

const MovieCard = ({ rank, movie }) => {
  return (
    <Wrapper>
      <Poster>
        {movie ? (
          <>
            <DeleteButton>&times;</DeleteButton>
            <img src={movie.poster} alt={movie.title} />
            <h1>{rank}</h1>
          </>
        ) : (
          <AddButton>
            +<h1>{rank}</h1>
          </AddButton>
        )}
      </Poster>
      <Description>{movie && movie.title}</Description>
    </Wrapper>
  );
};

export default MovieCard;
