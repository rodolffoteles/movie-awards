import React from 'react';
import { Wrapper, MovieItem } from './styles';

const MovieList = () => {
  return (
    <Wrapper>
      <MovieItem>
        <img src="https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_SX300.jpg" />
        <h3>How to Train Your Dragon</h3>
        <div>2019</div>
        <div>Jay Baruchel, Gerard Butler, Craig Ferguson, America Ferrera</div>
      </MovieItem>
      <MovieItem>
        <img src="https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_SX300.jpg" />
        <h3>How to Train Your Dragon</h3>
        <div>2019</div>
        <div>Jay Baruchel, Gerard Butler, Craig Ferguson, America Ferrera</div>
      </MovieItem>
    </Wrapper>
  );
};

export default MovieList;
