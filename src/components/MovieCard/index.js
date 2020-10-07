import React from 'react';
import { Wrapper, DeleteButton, AddButton, Description } from './styles';

const MovieCard = ({ rank, movie, removeMovie }) => {
  return (
    <Wrapper>
      {movie ? (
        <>
          <DeleteButton onClick={() => removeMovie(rank)}>&times;</DeleteButton>
          <img src={movie.poster} alt={movie.title} />
        </>
      ) : (
        <AddButton to="/search">+</AddButton>
      )}
      <Description>
        <h1>{rank}</h1>
        {movie && movie.title}
      </Description>
    </Wrapper>
  );
};

export default MovieCard;
