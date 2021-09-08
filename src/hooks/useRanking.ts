import { useState } from 'react';
import { Movie } from '../types';

interface Ranking {
  [rank: number]: Movie;
}

interface UseRanking {
  ranking: Ranking;
  rankMovie(rank: number, movie: Movie): void;
  unrankMovie(rank: number): void;
}

const useRanking = (): UseRanking => {
  const [ranking, setRanking] = useState<Ranking>({});

  const rankMovie = (rank: number, movie: Movie) => {
    setRanking(prevRanking => ({ ...prevRanking, [rank]: movie }));
  };

  const unrankMovie = (rank: number) => {
    setRanking(prevRanking => {
      const { [rank]: _, ...rest } = prevRanking;
      return rest;
    });
  };

  return {
    ranking,
    rankMovie,
    unrankMovie,
  };
};

export default useRanking;
