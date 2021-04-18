import { useSelector } from 'react-redux';

import { RootState } from '../../store';

import MovieList from '../MovieList';
import Loading from '../Loading';

import { Wrapper, Alert } from './styles';

const SearchResult = (): JSX.Element => {
  const { isLoading, error, searchResult, searchTerm } = useSelector(
    (state: RootState) => state.search
  );

  if (isLoading) return <Loading />;

  if (error && error.status == 404) {
    return (
      <Alert role="alert">
        <h3>No results for &quot;{searchTerm}&quot;</h3>
        The term you entered did not bring up any results. You may have mistyped
        something.
      </Alert>
    );
  }

  if (error) return <Alert role="alert">Something went wrong.</Alert>;

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
