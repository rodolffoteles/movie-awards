import React from 'react';
import { Wrapper, CloseButton } from './styles';
import { ReactComponent as CloseIcon } from '../../assets/close.svg';
import SearchBar from '../../components/SearchBar';
import MovieList from '../../components/MovieList';

const Search = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <Wrapper>
      <header>
        <CloseButton onClick={onClose}>
          <CloseIcon />
        </CloseButton>
        <h2>Choose the movie</h2>
        <SearchBar />
      </header>

      <div>
        <MovieList />
      </div>
    </Wrapper>
  );
};

export default Search;
