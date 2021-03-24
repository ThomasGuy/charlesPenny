import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import SanityImageBox from '../components/SanityImageBox';
import { Page } from '../styles';

const EventBox = styled.ul`
  position: relative;
  background-color: var(--link_bg);
  width: 100%;
  height: 30rem;
  margin: 4rem auto;
  /* color: var(--offWhite); */
  padding: 0 2rem;
  display: block;
  overflow-y: auto;
  p {
    margin: 0;
  }
  h3,
  h4 {
    color: #fff;
    margin-bottom: 0;
  }

  .title {
    font-size: 2.2rem;
    text-align: center;
  }

  @media screen and (min-width: 676px) {
    width: 80%;
  }

  li:first-child {
    margin-top: 4rem;
  }
`;

const UpComing = styled.h2`
  position: absolute;
  z-index: 10;
  top: 0;
  left: 2rem;
  right: 2rem;
  text-align: center;
  background: #640505;
  margin: 0 auto;
  opacity: 0.8;

  @media screen and (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const Box = styled.li`
  background: #640505;
  padding: 0 1rem;

  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

function Event({ evt }) {
  const { name, address, dates, about } = evt;
  const { number, road, city, postcode, country } = address;
  return (
    <Box>
      <h3 className="title">{name}</h3>
      <h4>
        Dates:- {dates.start} - {dates.finish}
      </h4>
      <p>{about}</p>
      <p>{`${number} ${road}, ${city}, ${postcode}, ${country}`}</p>
    </Box>
  );
}

const Home = () => {
  const { home } = useStaticQuery(graphql`
    query {
      home: sanityHome {
        events {
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
  const bio = biography.map(para => <p>{para}</p>);
  const latest = events.map(evt => <Event evt={evt} />);

  return (
    <Page>
      <SanityImageBox image={image} name="" />
      {bio}
      <EventBox>
        {latest}
        <UpComing>
          <u>Upcoming Events</u>
        </UpComing>
      </EventBox>
    </Page>
  );
};

export default Home;
