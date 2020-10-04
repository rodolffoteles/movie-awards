import React from 'react';
import GlobalStyle from './styles/global';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Search from './pages/Search';

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyle />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
