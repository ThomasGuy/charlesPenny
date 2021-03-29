import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Events from '../components/Events';
import SanityImageBox from '../components/SanityImageBox';
import { Page } from '../styles';
import { mediaQuery } from '../styles/mediaQuery';

const UpComing = styled.h2`
  width: 90%;
  text-align: center;
  background: var(--black);
  color: var(--yellow);
  margin: 0 auto;
  margin-top: 4rem;
  opacity: 0.9;
  font-size: 1.8rem;

  ${mediaQuery('xs')`
    font-size: 2.3rem;
  `};

  ${mediaQuery('sm')`
    font-size: 2.8rem;
    `};

  ${mediaQuery('md')`
    font-size: 3.2rem;
    width: 80%;
  `};
`;

const Bio = styled.p`
  text-align: center;
  font-size: 1.5rem;
  line-height: 1.4;
  padding: 0 0.5rem;

  @media screen and (min-width: 480px) {
    font-size: 2rem;
    line-height: 1.5;
    padding: 0 1rem;
  }
`;

const Home = () => {
  const { home } = useStaticQuery(graphql`
    query {
      home: sanityHome {
        events {
          _key
          name
          address {
            city
            country
            number
            postcode
            road
          }
          dates {
            start
            finish
          }
          about
        }
        biography
        image {
          asset {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
        }
      }
    }
  `);

  const { events, biography, image } = home;
  const bio = biography.map((para, idx) => <Bio key={idx}>{para}</Bio>);
  // const upComingEvents = events.map(evt => <Event evt={evt} />);

  return (
    <Page>
      <SanityImageBox image={image} name="" alt="Charles Penny" />
      {bio}
      <UpComing>Exhibitions and Events</UpComing>
      <Events events={events} />
    </Page>
  );
};

export default Home;
