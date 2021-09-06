import { useState } from 'react';
import useDebounce from '../../hooks/useDebounce';
import useRanking from '../../hooks/useRanking';
import useSearch from '../../hooks/useSearch';

import AwardImage from '../../assets/svg/awards.svg';
import { ReactComponent as OscarTrophyIcon } from '../../assets/svg/oscarTrophy.svg';

import Modal from '../../components/Modal';
import MovieCard from '../../components/MovieCard';
import SearchBar from '../../components/SearchBar';
import SearchResult from '../../components/SearchResult';
import SidePanel from '../../components/SidePanel';

import { Wrapper, SearchBarWrapper } from './styles';
import { useEffect } from 'react';

const RANKING_POSITIONS = [1, 2, 3, 4, 5];
const DEBOUNCE_DELAY = 50;

const Home = (): JSX.Element => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [sidePanelIsOpen, setSidePanelIsOpen] = useState(false);

  const [searchTerm, setSearchterm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, DEBOUNCE_DELAY);

  const { search, ...searchState } = useSearch();

  const [currentSelectedRank, setCurrentSelectedRank] = useState<number>();

  const { ranking } = useRanking();
  const movies = Object.values(ranking);

  const handleAddMovie = (rank: number) => {
    setCurrentSelectedRank(rank);
    toggleSidePannel();
  };

  const toggleSidePannel = () => {
    setSidePanelIsOpen(prev => !prev);
    setSearchterm('');
  };

  const toggleModal = () => {
    setModalIsOpen(prev => !prev);
  };

  const handleSearch = (searchTerm: string) => {
    setSearchterm(searchTerm);
  };

  useEffect(() => {
    search(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  return (
    <>
      <Wrapper>
        <header>
          <OscarTrophyIcon />
          <h1>
            Movie <br /> Awards
          </h1>
        </header>

        <h2>Rank the five best movies you&apos;ve ever watched</h2>
        <section>
          {RANKING_POSITIONS.map(number => (
            <MovieCard
              key={number}
              rank={number}
              movie={movies[number]}
              onAdd={() => handleAddMovie(number)}
            />
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

        <SearchResult
          isLoading={searchState.isLoading}
          searchResult={searchState.movies}
          ranking={ranking}
          error={searchState.error}
          searchTerm={debouncedSearchTerm}
        />
      </SidePanel>
    </>
  );
};

export default Home;
