import React from 'react';
import 'normalize.css';
import styled from 'styled-components';

import Footer from './Footer';
import Nav from './Nav';
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
  padding: 0 2rem;

  @media screen and (max-width: 380px) {
    padding: 0 0.8rem;
  }
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
