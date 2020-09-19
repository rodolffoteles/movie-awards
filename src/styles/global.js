import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    color: #FFFFFF;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
    margin: 0;
    padding: 0;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
  }

  html, body {
    overflow-y: scroll;
  }

  body {
    background: linear-gradient(#00081A, #00113A);
  }
`;

export default GlobalStyle;
