import React from 'react';
import { ThemeProvider } from 'styled-components';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';
import colors from './styles/colors';
import GlobalStyle from './styles/global';

import Home from './pages/Home';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={colors}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
