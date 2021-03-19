import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
    margin: 0;
    padding: 0;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    --red: #FF4949;
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fff;
    --offWhite: #ededed;
    --grey: #efefef;
    --maxWidth: 1280px;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.2);
    --bg: #914e21ff;
    --bg_link: #92570b;
    --title: #442502;
    --link_hover: rgba(134, 80, 9, 0.2);
    --nav-size: 60px;
    --border: 1px solid #474a4d;
    --sm: 479;
    --border-radius: 8px;
    --speed: 500ms;
    font-size: 2rem;
    min-height: 100vh;
    background-color: #914e21dd;
  }


  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: var(--offWhite);
  }
`;
