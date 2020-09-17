import React from 'react';

import MovieCard from '../components/moviecard';
const Home = () => {
  let rank = [1, 2, 3, 4, 5];

  return (
    <div>
      {rank.map((number) => (
        <MovieCard key={number} rank={number} />
      ))}
    </div>
  );
};

export default Home;
