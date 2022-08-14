import React, { useEffect } from 'react';
import Events from '../components/Events';
import SanityImageBox from '../components/SanityImageBox';
import { Page, Bio, UpComing } from '../styles';
import SEO from '../components/SEO';
import { useTitleContext } from '../hooks/TitleContext';

const Home = ({ pageContext }) => {
  const { events, biography, image } = pageContext.home;
  // eslint-disable-next-line react/no-array-index-key
  const bio = biography.map((para, idx) => <Bio key={idx}>{para}</Bio>);
  const { setPageTitle } = useTitleContext();

  useEffect(() => {
    setPageTitle(pageContext.title);
  }, [pageContext.title, setPageTitle]);

  return (
    <Page>
      <SanityImageBox image={image} name="" alt="Charles Penny" title="Charles Penny" />
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
  return (
    <>
      <html lang="en-GB" />
      <SEO title="Charles Penny Gallery" />
    </>
  );
};
