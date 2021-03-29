import React from 'react';
import 'normalize.css';
import styled from 'styled-components';

import Footer from './Footer';
import Nav from './Nav';
import { mediaQuery } from '../styles/mediaQuery';
import { GlobalStyles } from '../styles';

const ContentStyles = styled.div`
  background-color: var(--charles);
  max-width: var(--maxWidth);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0 auto;
`;

const Inner = styled.div`
  padding: 0 0.7rem;

  ${mediaQuery('xs')`
    padding: 0 1.2rem;
  `};

  ${mediaQuery('sm')`
    padding: 0 1.6rem;
  `};

  ${mediaQuery('md')`
    padding: 0 2.2rem;
  `};
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
