import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import { ThemeProvider } from 'styled-components';
import colors from './styles/colors';
import GlobalStyle from './styles/global';

import Home from './pages/Home';

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={colors}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
