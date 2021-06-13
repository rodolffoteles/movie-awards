import { useDispatch, useSelector } from 'react-redux';
import { hideSidePanel, hideModal } from '../../actions/ui';
import { setSearchTerm, searchMovie, resetSearch } from '../../actions/search';
import useDebounce from '../../hooks/useDebounce';
import type { RootState } from '../../store';

import AwardImage from '../../assets/awards.svg';
import { ReactComponent as OscarIcon } from '../../assets/oscars.svg';

import Modal from '../../components/Modal';
import MovieCard from '../../components/MovieCard';
import SearchBar from '../../components/SearchBar';
import SearchResult from '../../components/SearchResult';
import SidePanel from '../../components/SidePanel';

import { Wrapper, SearchBarWrapper } from './styles';

const RANKING_POSITIONS = [1, 2, 3, 4, 5];
const DEBOUNCE_DELAY = 50;

const Home = (): JSX.Element => {
  const dispatch = useDispatch();

  const { sidePanelIsOpen, modalIsOpen } = useSelector(
    (state: RootState) => state.ui
  );

  const toggleSidePannel = () => {
    dispatch(hideSidePanel());
    dispatch(resetSearch());
  };

  const toggleModal = () => {
    dispatch(hideModal());
  };

  const searchTerm = useSelector((state: RootState) => state.search.searchTerm);

  const debouncedSearchMovie = useDebounce(
    () => dispatch(searchMovie()),
    DEBOUNCE_DELAY
  );

  const handleSearch = (searchTerm: string) => {
    if (searchTerm !== '') {
      dispatch(setSearchTerm(searchTerm));
      debouncedSearchMovie();
    }
  };

  const movies = useSelector((state: RootState) => state.ranking);

  return (
    <>
      <Wrapper>
        <header>
          <OscarIcon />
          <h1>
            Movie
            <br />
            Awards
          </h1>
        </header>

        <h2>Rank the five best movies you&apos;ve ever watched</h2>
        <section>
          {RANKING_POSITIONS.map(number => (
            <MovieCard key={number} rank={number} movie={movies[number]} />
          ))}
        </section>
      </Wrapper>

      <Modal isOpen={modalIsOpen} onClose={toggleModal}>
        <img src={AwardImage} alt="Man and woman dressed up holding an award" />
        <h1>Great!</h1>
        <p>
          You completed your ranking.
          <br />
          These are indeed really good movies.
        </p>
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
            onChange={handleSearch}
          />
        </SearchBarWrapper>

        <SearchResult />
      </SidePanel>
    </>
  );
};

export default Home;
