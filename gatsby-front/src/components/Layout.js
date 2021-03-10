import React from 'react';
import 'normalize.css';
import styled from 'styled-components';

import Footer from './Footer';
import Nav from './Nav';
import GlobalStyles from '../styles/GlobalStyles';

const ContentStyles = styled.div`
  background-color: var(--bg);
  max-width: var(--maxWidth);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0 auto;
`;

const Inner = styled.div`
  padding: 2rem;
`;

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <ContentStyles>
      <Nav />
      <Inner>{children}</Inner>
      <Footer />
    </ContentStyles>
  </>
);

export default Layout;
