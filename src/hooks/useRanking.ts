import { useState } from 'react';
import { Movie } from '../types';

interface Ranking {
  [rank: number]: Movie;
}

interface UseRanking {
  ranking: Ranking;
  addMovie(rank: number, movie: Movie): void;
  removeMovie(rank: number): void;
}

const useRanking = (): UseRanking => {
  const [ranking, setRanking] = useState<Ranking>({});

  const addMovie = (rank: number, movie: Movie) => {
    setRanking(prevRanking => ({ ...prevRanking, [rank]: movie }));
  };

  const removeMovie = (rank: number) => {
    setRanking(prevRanking => {
      const { [rank]: _, ...rest } = prevRanking;
      return rest;
    });
  };

  return {
    ranking,
    addMovie,
    removeMovie,
  };
};

export default useRanking;
