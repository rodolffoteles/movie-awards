import { useSelector } from 'react-redux';

import { RootState } from '../../store';

import MovieList from '../MovieList';
import Spinner from '../Spinner';

import { Wrapper, Alert } from './styles';

const SearchResult = (): JSX.Element => {
  const { isLoading, error, searchResult, searchTerm } = useSelector(
    (state: RootState) => state.search
  );

  if (isLoading) return <Spinner />;

  if (error) {
    switch (error.code) {
      case 404:
        return (
          <Alert role="alert">
            <h3>No results for &quot;{searchTerm}&quot;</h3>
            The term you entered did not bring up any results. You may have
            mistyped something.
          </Alert>
        );
      case 413:
        return (
          <Alert role="alert">
            <h3>Too many results for &quot;{searchTerm}&quot;</h3>
            There are too many results for this search. Try again with more
            specific keywords.
          </Alert>
        );
      default:
        return <Alert role="alert">Something went wrong.</Alert>;
    }
  }

  return (
    <Wrapper>
      <MovieList movies={searchResult} />
    </Wrapper>
  );
};

export default SearchResult;