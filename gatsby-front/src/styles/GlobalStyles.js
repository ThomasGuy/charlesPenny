import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --red: #FF4949;
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fff;
    --offWhite: #edededee;
    --grey: #efefef;
    --maxWidth: 1280px;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.2);
    --bg: #914e21ff;
    --bg_link: #92570b;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-size: 2rem;
    min-height: 100vh;
    background-color: #914e21dd;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyles;
