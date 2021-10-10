import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
 
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
  }

  body {  
    background: linear-gradient(${props => props.theme.colors.primary.darkest},
      ${props => props.theme.colors.primary.darker}
      ) fixed;
    color: #ffffff;
    font-family: 'Lato', sans-serif;
  }
`;

export default GlobalStyle;
