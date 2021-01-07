import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideSidePanel } from '../../actions';

import MovieCard from '../../components/MovieCard';
import SidePanel from '../../components/SidePanel';
import SearchBar from '../../components/SearchBar';
import MovieList from '../../components/MovieList';

import { Wrapper, SearchBarWrapper, Scrollable } from './styles';

const Home = () => {
  const [searchResult, setSearchResult] = useState([]);
  const dispatch = useDispatch();

  const toggleSidePannel = () => dispatch(hideSidePanel());
  const movies = useSelector(state => state.movies);
  const sidePanelIsOpen = useSelector(state => state.ui.sidePanelIsOpen);
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
          <SearchBar
            placeholder="Movie title"
            setSearchResult={setSearchResult}
          />
        </SearchBarWrapper>

        <Scrollable>
          <MovieList movies={searchResult} />
        </Scrollable>
      </SidePanel>
    </>
  );
};

export default Home;
