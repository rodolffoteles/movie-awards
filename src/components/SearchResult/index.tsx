import React from 'react';
import { useSelector } from 'react-redux';

import MovieList from '../MovieList';
import Loading from '../Loading';

import { Wrapper, Alert } from './styles';

const SearchResult = () => {
  const { isLoading, error, searchResult, searchTerm } = useSelector(
    state => state.search
  );

  if (isLoading) return <Loading />;

  if (error) return <Alert role="alert">Something went wrong.</Alert>;

  if (searchTerm && searchResult.length === 0) {
    return (
      <Alert role="alert">
        <h3>No results for "{searchTerm}"</h3>
        The term you entered did not bring up any results. You may have mistyped
        something.
      </Alert>
    );
  }

  return (
    <>
      {searchResult.length !== 0 && (
        <Wrapper>
          <MovieList movies={searchResult} />
        </Wrapper>
      )}
    </>
  );
};

export default SearchResult;
