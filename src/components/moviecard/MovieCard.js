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
  position: relative;
  transition: background-color 0.2s ease, color 0.2s ease;
  width: 10rem;

  &:hover {
    background-color: #042b76;
    color: #043fb0;
  }

  & > p {
    color: #f8d500;
    font-size: 7rem;
    font-weight: bold;
    position: absolute;
    bottom: -3.5rem;
  }
`;

const Wrapper = styled.div`
  margin: 1rem;
  width: 10rem;
`;

const Footer = styled.div`
  position: relative;
  margin-top: 3rem;
  text-align: center;
`;

const MovieCard = ({ rank }) => {
  return (
    <Wrapper>
      <Poster>
        +<p>{rank}</p>
      </Poster>
      <Footer>Guardians of the Galaxy Vol. 2</Footer>
    </Wrapper>
  );
};

export default MovieCard;
