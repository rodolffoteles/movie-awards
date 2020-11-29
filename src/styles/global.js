import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    color: #ffffff;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
  }

  body {
    background: linear-gradient(#00081A, #00113A) fixed;
  }

  button {
    border: none;
    cursor: pointer;
  }
`;

export default GlobalStyle;
