import React from 'react';
import styled from 'styled-components';

const Poster = styled.button`
  align-items: center;
  background-color: #002263;
  border: none;
  border-radius: 0.5rem;
  color: #002e86;
  cursor: pointer;
  display: flex;
  font-size: 7rem;
  height: 15rem;
  justify-content: center;
  transition: background-color 0.2s ease, color 0.2s ease;
  width: 10rem;

  &:hover {
    background-color: #042b76;
    color: #043fb0;
  }
`;

const Wrapper = styled.div`
  margin: 1rem;
`;

const MovieCard = ({ rank }) => {
  return (
    <Wrapper>
      <Poster>+</Poster>
      <div>
        <div>{rank}</div>
        <p>Guardians of the Galaxy Vol. 2</p>
        <p>2017</p>
      </div>
    </Wrapper>
  );
};

export default MovieCard;
