import { Provider } from 'react-redux';
import store from './store';

import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyle from './styles/global';

import Home from './pages/Home';

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
