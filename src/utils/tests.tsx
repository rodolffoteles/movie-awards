import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import type { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';

const AllTheProviders: FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export const renderWithProviders = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => {
  return render(ui, { wrapper: AllTheProviders, ...options });
};
