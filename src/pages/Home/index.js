import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideSidePanel, setSearchTerm, searchMovie } from '../../actions';

import MovieCard from '../../components/MovieCard';
import SidePanel from '../../components/SidePanel';
import SearchBar from '../../components/SearchBar';
import SearchResult from '../../components/SearchResult';

import { Wrapper, SearchBarWrapper } from './styles';

const Home = () => {
  const dispatch = useDispatch();

  const sidePanelIsOpen = useSelector(state => state.ui.sidePanelIsOpen);
  const toggleSidePannel = () => dispatch(hideSidePanel());

  const handleSearch = searchTerm => {
    dispatch(setSearchTerm(searchTerm));
    dispatch(searchMovie(searchTerm));
  };

  const movies = useSelector(state => state.rank);
  const rank = [1, 2, 3, 4, 5];

  return (
    <>
      <Wrapper>
        <h1>Rank the five best movies you've ever watched</h1>
        <section>
          {rank.map(number => (
            <MovieCard key={number} rank={number} movie={movies[number]} />
          ))}
        </section>
      </Wrapper>

      <SidePanel
        title="Choose the movie"
        isOpen={sidePanelIsOpen}
        onClose={toggleSidePannel}
      >
        <SearchBarWrapper>
          <SearchBar placeholder="Movie title" onChangeText={handleSearch} />
        </SearchBarWrapper>

        <SearchResult />
      </SidePanel>
    </>
  );
};

export default Home;
