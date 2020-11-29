import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hideSheet } from '../../actions';

import { Wrapper, CloseButton } from './styles';
import { ReactComponent as CloseIcon } from '../../assets/close.svg';

import SearchBar from '../../components/SearchBar';
import MovieList from '../../components/MovieList';

const Search = () => {
  const [searchResult, setSearchResult] = useState([]);
  const isOpen = useSelector(state => state.sheet.open);
  const dispatch = useDispatch();

  if (!isOpen) return null;

  const handleCloseSheet = () => {
    dispatch(hideSheet());
  };

  return (
    <Wrapper>
      <header>
        <CloseButton onClick={handleCloseSheet}>
          <CloseIcon />
        </CloseButton>
        <h2>Choose the movie</h2>
        <SearchBar setSearchResult={setSearchResult} />
      </header>
      <div>
        <MovieList movies={searchResult} />
      </div>
    </Wrapper>
  );
};

export default Search;
