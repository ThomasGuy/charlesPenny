import React, { createContext, useState } from 'react';
// import 'normalize.css';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { BreakpointProvider } from '../hooks/useBreakpoint';
import Footer from './Footer';
import Nav from './Nav';
import { mediaQuery } from '../styles/mediaQuery';
import { GlobalStyles } from '../styles';
import SEO from './SEO';

const ContentStyles = styled.div`
  background-color: var(--charles);
  max-width: var(--maxWidth);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0 auto;
`;

const Main = styled.div`
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

// these should maybe be synced up with mediaQueries
const queries = {
  or: '(orientation: portrait)', // we can check orientation also
  navChange: '(min-width: 810px)',
};

export const TitleContext = createContext({
  title: 'Sport',
  setTitle: () => {},
});

const Layout = ({ children, siteTitle, siteDescription }) => {
  const [title, setTitle] = useState(siteTitle);
  return (
    <>
      <GlobalStyles />
      <SEO title={siteTitle} description={siteDescription} />
      <ContentStyles>
        <BreakpointProvider queries={queries}>
          <Nav title={title} />
          <TitleContext.Provider value={{ title, setTitle }}>
            <Main>{children}</Main>
          </TitleContext.Provider>
        </BreakpointProvider>
        <Footer />
      </ContentStyles>
    </>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node,
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
};
