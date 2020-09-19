import React from 'react';
import styled from 'styled-components';
import MovieCard from '../components/moviecard';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
const Home = () => {
  let rank = [1, 2, 3, 4, 5];

  return (
    <Wrapper>
      {rank.map(number => (
        <MovieCard key={number} rank={number} />
      ))}
    </Wrapper>
  );
};

export default Home;
