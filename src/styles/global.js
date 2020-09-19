import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
    color: #FFFFFF;
  }

  html, body {
    height: 100%;
    width: 100%;
  }

  body {
    background: linear-gradient(180deg, #00081A 0%, #00113A 100%);
  }
`;

export default GlobalStyle;
