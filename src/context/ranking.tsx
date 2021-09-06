import React, { useState } from 'react';
import type { Ranking, Movie } from '../types';

interface UseRanking {
  ranking: Ranking;
  addMovie(rank: number, movie: Movie): void;
  removeMovie(rank: number): void;
}

export const RankingContext = React.createContext({});

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

export const RankingProvider: React.FC = ({ children }) => {
  const values = useRanking();

  return (
    <RankingContext.Provider value={{ ...values }}>
      {children}
    </RankingContext.Provider>
  );
};
