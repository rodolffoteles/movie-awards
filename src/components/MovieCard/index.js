import React from 'react';
import {
  Wrapper,
  Poster,
  DeleteButton,
  AddButton,
  Description,
} from './styles';

const MovieCard = ({ rank, movie, removeMovie }) => {
  return (
    <Wrapper>
      <Poster>
        {movie ? (
          <>
            <DeleteButton onClick={() => removeMovie(rank)}>
              &times;
            </DeleteButton>
            <img src={movie.poster} alt={movie.title} />
            <h1>{rank}</h1>
          </>
        ) : (
          <AddButton to="/search">
            +<h1>{rank}</h1>
          </AddButton>
        )}
      </Poster>
      <Description>{movie && movie.title}</Description>
    </Wrapper>
  );
};

export default MovieCard;
