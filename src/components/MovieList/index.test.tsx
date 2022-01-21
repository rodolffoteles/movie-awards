import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '../../utils/tests';
import MovieList from './index';
import { Movie } from '../../types';

describe('<MovieList/>', () => {
  it('disabled add button when movie is already ranked', () => {
    // TODO: Use mock data factories instead
    const mockRankedMovie: Movie = {
      imdbId: 'foo',
      title: 'foo',
      poster: 'foo/foo',
      year: '2012',
    };
    const mockeUnrankedMovie: Movie = {
      imdbId: 'bar',
      title: 'bar',
      poster: 'bar/bar',
      year: '2022',
    };

    const mockRanking = { 1: mockRankedMovie };
    const mockMovies = [mockRankedMovie, mockeUnrankedMovie];

    renderWithProviders(
      <MovieList ranking={mockRanking} movies={mockMovies} />
    );

    const buttons = screen.queryAllByRole('button', { name: /add movie/i });
    expect(buttons[0]).toBeDisabled();
    expect(buttons[1]).not.toBeDisabled();
  });

  describe('onAdd()', () => {
    it('is called with the slected movie', () => {
      const mockMovie: Movie = {
        imdbId: 'foo',
        title: 'foo',
        poster: 'foo/foo',
        year: '2012',
      };
      const onAddSpy = jest.fn();

      renderWithProviders(
        <MovieList ranking={{}} movies={[mockMovie]} onAdd={onAddSpy} />
      );

      fireEvent.click(screen.getByRole('button', { name: /add movie/i }));
      expect(onAddSpy).toHaveBeenCalledWith(mockMovie);
    });
  });
});
