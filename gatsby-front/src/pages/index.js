import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { Event, Events } from '../components/Events';
import SanityImageBox from '../components/SanityImageBox';
import { Page } from '../styles';

const UpComing = styled.h2`
  text-align: center;
  background: var(--black);
  color: var(--yellow);
  margin: 0 auto;
  margin-top: 4rem;
  opacity: 0.9;

  @media screen and (min-width: 676px) {
    width: 80%;
  }
`;

const Bio = styled.p`
  font-size: 2rem;
  line-height: 1.5;

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
    line-height: 1.4;
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
          ...ImageWithPreview
        }
      }
    }
  `);

  const { events, biography, image } = home;
  const bio = biography.map(para => <Bio>{para}</Bio>);
  const upComingEvents = events.map(evt => <Event evt={evt} />);

  return (
    <Page>
      <SanityImageBox image={image} name="" alt="Charles Penny" />
      {bio}
      <UpComing>Exhibitions and Events</UpComing>
      <Events>{upComingEvents}</Events>
    </Page>
  );
};

export default Home;
