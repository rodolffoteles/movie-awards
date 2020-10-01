import React from 'react';
import GlobalStyle from './styles/global';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

import Home from './pages/Home';

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Home />
    </Provider>
  );
}

export default App;
