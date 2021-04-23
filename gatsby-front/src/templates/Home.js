import React, { useContext, useEffect } from 'react';
import Events from '../components/Events';
import SanityImageBox from '../components/SanityImageBox';
import { Page, Bio, UpComing } from '../styles';
import SEO from '../components/SEO';
import { TitleContext } from '../components/Layout';

const Home = ({ pageContext }) => {
  const { setTitle } = useContext(TitleContext);
  const { events, biography, image } = pageContext.home;
  const bio = biography.map((para, idx) => <Bio key={idx}>{para}</Bio>);

  useEffect(() => {
    setTitle(pageContext.title);
  }, [pageContext.title, setTitle]);

  return (
    <Page>
      <SEO title="Charles Penny home page" imageSrc={image?.asset?.url} />
      <SanityImageBox
        image={image}
        name=""
        alt="Charles Penny"
        title="Charles Penny"
      />
      {bio}
      <UpComing>Exhibitions and Events</UpComing>
      <Events events={events} />
    </Page>
  );
};

export default Home;
