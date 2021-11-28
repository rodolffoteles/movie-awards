import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../utils/tests';
import SearchBar from './index';

describe('<SeachBar/>', () => {
  describe('focused', () => {
    it('should focus input when set to true', () => {
      renderWithProviders(<SearchBar focused />);
      const element = screen.getByRole('searchbox');
      expect(document.activeElement).toBe(element);
    });
  });
});
