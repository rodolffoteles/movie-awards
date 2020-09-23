import React from 'react';
import styled from 'styled-components';
import MovieCard from '../components/moviecard';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;

  > section {
    margin-top: 3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const Home = () => {
  let rank = [1, 2, 3, 4, 5];
  let movies = [
    {
      id: 1,
      title: 'How to Train Your Dragon',
      poster:
        'https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_SX300.jpg',
    },
    {
      id: 2,
      title: "A Dog's will",
      poster:
        'https://m.media-amazon.com/images/M/MV5BOTNlZTkxOGUtMmI0MC00MzVjLWE4NzQtNjRjMzNjMzRmMWUyXkEyXkFqcGdeQXVyMTkzODUwNzk@._V1_SX300.jpg',
    },
  ];

  return (
    <Wrapper>
      <h1>Rank the five best movies you've ever watched</h1>
      <section>
        {rank.map(number => (
          <MovieCard key={rank} rank={number} movie={movies[number - 1]} />
        ))}
      </section>
    </Wrapper>
  );
};

export default Home;
