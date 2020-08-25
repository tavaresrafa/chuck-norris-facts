import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    overflow-y: scroll;
  }

  html, body, #__next {
    height: 100vh;
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  #root {
    height: 100vh;
    display: flex;
    justify-content: center;
  }

  ul {
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;

export default GlobalStyles;
