import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from '../../utils/tests';
import SidePanel from './index';

describe('<SidePanel/>', () => {
  describe('isOpen', () => {
    it('render children when true', async () => {
      const mockChildren = 'mock children';
      renderWithProviders(
        <SidePanel title="foo" isOpen onClose={jest.fn()}>
          {mockChildren}
        </SidePanel>
      );

      expect(screen.queryByText(mockChildren)).toBeInTheDocument();
    });

    it('does not render children when false', async () => {
      const mockChildren = 'mock children';
      renderWithProviders(
        <SidePanel title="foo" isOpen={false} onClose={jest.fn()}>
          {mockChildren}
        </SidePanel>
      );

      expect(screen.queryByText(mockChildren)).not.toBeInTheDocument();
    });
  });

  describe('title', () => {
    it('renders header with title', () => {
      const mockTitle = 'mock title';
      renderWithProviders(
        <SidePanel title={mockTitle} isOpen onClose={jest.fn()} />
      );

      expect(
        screen.queryByRole('heading', { name: mockTitle })
      ).toBeInTheDocument();
    });
  });

  describe('onClose()', () => {
    it('is called when the button is clicked', () => {
      const onCloseSpy = jest.fn();
      renderWithProviders(
        <SidePanel title="foo" isOpen onClose={onCloseSpy} />
      );

      fireEvent.click(screen.getByRole('button'));
      expect(onCloseSpy).toHaveBeenCalledTimes(1);
    });
  });
});
