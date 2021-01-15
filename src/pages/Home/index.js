import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  hideSidePanel,
  hideModal,
  setSearchTerm,
  searchMovie,
} from '../../actions';

import AwardImage from '../../assets/awards.svg';
import MovieCard from '../../components/MovieCard';
import SidePanel from '../../components/SidePanel';
import Modal from '../../components/Modal';
import SearchBar from '../../components/SearchBar';
import SearchResult from '../../components/SearchResult';

import { Wrapper, SearchBarWrapper } from './styles';

const Home = () => {
  const dispatch = useDispatch();

  const { sidePanelIsOpen, modalIsOpen } = useSelector(state => state.ui);
  const toggleSidePannel = () => dispatch(hideSidePanel());

  const toggleModal = () => dispatch(hideModal());

  const searchTerm = useSelector(state => state.search.searchTerm);

  const handleSearch = searchTerm => {
    dispatch(setSearchTerm(searchTerm));
    dispatch(searchMovie(searchTerm));
  };

  const movies = useSelector(state => state.ranking);
  const rank = [1, 2, 3, 4, 5];

  return (
    <>
      <Wrapper>
        <header>
          <h1>Movie Awards</h1>
        </header>

        <h1>Rank the five best movies you've ever watched</h1>
        <section>
          {rank.map(number => (
            <MovieCard key={number} rank={number} movie={movies[number]} />
          ))}
        </section>
      </Wrapper>

      <Modal isOpen={modalIsOpen} onClose={toggleModal}>
        <img src={AwardImage} />
        <h1>Great!</h1>
        <p>You completed your ranking.</p>
        <p>These are indeed really good movies.</p>
      </Modal>

      <SidePanel
        title="Choose the movie"
        isOpen={sidePanelIsOpen}
        onClose={toggleSidePannel}
      >
        <SearchBarWrapper>
          <SearchBar
            placeholder="Movie title"
            value={searchTerm}
            onChangeText={handleSearch}
          />
        </SearchBarWrapper>

        <SearchResult />
      </SidePanel>
    </>
  );
};

export default Home;
