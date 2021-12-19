export type Movie = {
  imdbId: string;
  title: string;
  poster: string;
  year: string;
  actors?: string;
};

export interface Ranking {
  [rank: number]: Movie;
}
