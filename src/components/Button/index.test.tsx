import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from '../../utils/tests';
import Button from './index';

describe('<Button/>', () => {
  describe('children', () => {
    it('displays the content', async () => {
      const mockChildren = 'mock children';
      renderWithProviders(<Button>{mockChildren}</Button>);
      expect(screen.getByRole('button')).toHaveTextContent(mockChildren);
    });
  });

  describe('disabled', () => {
    it('disables the button', () => {
      renderWithProviders(<Button disabled />);
      expect(screen.getByRole('button')).toBeDisabled();
    });
  });

  describe('icon', () => {
    it('renders the icon content', () => {
      const mockIconContet = 'mock icon';
      const Icon = () => <div>{mockIconContet}</div>;
      renderWithProviders(<Button icon={<Icon />} />);
      expect(screen.getByText(mockIconContet)).toBeInTheDocument();
    });
  });

  describe('onClick()', () => {
    it('is called when the button is clicked', async () => {
      const onClickSpy = jest.fn();
      renderWithProviders(<Button onClick={onClickSpy} />);
      fireEvent.click(screen.getByRole('button'));
      expect(onClickSpy).toHaveBeenCalled();
    });
  });
});
