import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 10px;
    margin: 0;
    padding: 0;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    h1,
    h2,
    h3,
    h4 {
      font-family: 'Helvetica Neue', Helvetica, --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif;
    }
    --bg: #cc3925c9;
    --charles: #d42d16ec;
    --link_bg: #7f0202;
    --title: #442502;
    --link_hover: #c42510d5;

    --red: #FF4949;

    --black: #2E2E2E;

    --yellow: #ffc600;

    --white: #fff;

    --offWhite: #ededed;

    --grey: #efefef;
    --maxWidth: 1280px;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.2);
    --nav-size: 60px;
    --border: 1px solid #474a4d;
    --sm: 479;
    --border-radius: 8px;
    --speed: 500ms;
    min-height: 100vh;
    background-color: var(--black);
    font-size: 1.5rem;
    line-height:2;
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
