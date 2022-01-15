import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../utils/tests';
import Modal from './index';

describe('<Modal/>', () => {
  describe('isOpen', () => {
    it('render children when true', () => {
      const mockChildren = 'mock children';
      renderWithProviders(
        <Modal onClose={jest.fn()} isOpen>
          {mockChildren}
        </Modal>
      );

      expect(screen.queryByText(mockChildren)).toBeInTheDocument();
    });

    it('does not render children when false', () => {
      const mockChildren = 'mock children';
      renderWithProviders(
        <Modal onClose={jest.fn()} isOpen={false}>
          {mockChildren}
        </Modal>
      );

      expect(screen.queryByText(mockChildren)).not.toBeInTheDocument();
    });
  });
});
