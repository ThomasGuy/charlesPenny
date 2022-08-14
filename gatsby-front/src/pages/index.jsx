/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import Events from '../components/Events';
import SanityImageBox from '../components/SanityImageBox';
import { Page, Bio, UpComing } from '../styles';
import SEO from '../components/SEO';
import { useTitleContext } from '../hooks/TitleContext';

export const query = graphql`
  query HomePageQuery {
    home: sanityHome {
      _id
      events {
        _key
        about
        name
        address {
          number
          road
          city
          postcode
          country
        }
        dates {
          finish(formatString: "DD-MM-YY")
          start(formatString: "DD-MM-YY")
        }
      }
      biography
      image {
        asset {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          url
        }
      }
    }
  }
`;

function keygen(id) {
  return id + 1;
}

const Home = ({ data }) => {
  const { events, biography, image } = data.home;
  const bio = biography.map((para, idx) => <Bio key={keygen(idx)}>{para}</Bio>);
  const { setPageTitle } = useTitleContext();

  useEffect(() => {
    setPageTitle('Charles Penny Gallery');
  }, [setPageTitle]);

  return (
    <Page>
      <SanityImageBox
        image={image}
        name=""
        idx={0}
        alt="Charles Penny"
        title="Charles Penny"
      />
      {bio}
      {events && events.length > 0 && (
        <>
          <UpComing>Exhibitions and Events</UpComing>
          <Events events={events} />
        </>
      )}
    </Page>
  );
};

export default Home;

export const Head = () => {
  return <SEO title="Charles Penny Gallery" />;
};
