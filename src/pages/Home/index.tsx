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

import { Wrapper, SearchBarWrapper, ModalContent } from './styles';
import { useEffect } from 'react';
import { Movie } from '../../types';

const RANKING_POSITIONS = [1, 2, 3, 4, 5];
const DEBOUNCE_DELAY = 250;

const Home = (): JSX.Element => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [sidePanelIsOpen, setSidePanelIsOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState<string>();
  const debouncedSearchTerm = useDebounce(searchTerm, DEBOUNCE_DELAY);

  const [currentSelectedRank, setCurrentSelectedRank] = useState<number>();

  const { search, clearSearch, ...searchState } = useSearch();

  const { ranking, rankMovie, unrankMovie } = useRanking();

  const handleChooseMovie = (rank: number) => {
    setCurrentSelectedRank(rank);
    toggleSidePannel();
  };

  const handleAddMovie = (movie: Movie) => {
    if (currentSelectedRank) {
      rankMovie(currentSelectedRank, movie);
      toggleSidePannel();
    }
  };

  const toggleSidePannel = () => {
    setSidePanelIsOpen(prev => !prev);
    clearSearch();
    setSearchTerm(undefined);
  };

  const toggleModal = () => {
    setModalIsOpen(prev => !prev);
  };

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      search(debouncedSearchTerm);
    }
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
              movie={ranking[number]}
              onAdd={() => handleChooseMovie(number)}
              onRemove={() => unrankMovie(number)}
            />
          ))}
        </section>
      </Wrapper>

      <Modal isOpen={modalIsOpen} onClose={toggleModal}>
        <ModalContent>
          <img
            src={AwardImage}
            alt="Man and woman dressed up holding an award"
          />
          <h1>Great!</h1>
          <p>
            You completed your ranking. <br /> These are indeed really good
            movies.
          </p>
        </ModalContent>
      </Modal>

      <SidePanel
        title="Choose the movie"
        isOpen={sidePanelIsOpen}
        onClose={toggleSidePannel}
      >
        <SearchBarWrapper>
          <SearchBar
            focused
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
          onAdd={handleAddMovie}
        />
      </SidePanel>
    </>
  );
};

export default Home;
