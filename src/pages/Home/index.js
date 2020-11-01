import React from 'react';
import { useSelector } from 'react-redux';

import { Wrapper } from './styles';
import MovieCard from '../../components/MovieCard';
import Search from '../Search';

const Home = () => {
  const movies = useSelector(state => state.movies);
  const rank = [1, 2, 3, 4, 5];

  return (
    <Wrapper>
      <h1>Rank the five best movies you've ever watched</h1>
      <section>
        {rank.map(number => (
          <MovieCard key={number} rank={number} movie={movies[number]} />
        ))}
      </section>

      <Search />
    </Wrapper>
  );
};

export default Home;
