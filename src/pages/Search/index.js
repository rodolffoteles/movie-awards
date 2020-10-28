import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from './styles';
import { ReactComponent as BackArrowIcon } from '../../assets/back-arrow.svg';
import SearchBar from '../../components/SearchBar';
import MovieList from '../../components/MovieList';

const Search = () => {
  return (
    <Wrapper>
      <header>
        <Link to="/">
          <BackArrowIcon />
        </Link>
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
