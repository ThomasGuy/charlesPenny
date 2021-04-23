import React from 'react';
import Layout from '../components/Layout';
import useSiteMetadata from '../hooks/useSiteMetadata';

function LayoutContainer(props) {
  const { siteTitle, siteURL, siteDescription } = useSiteMetadata();

  return (
    <Layout
      {...props}
      siteTitle={siteTitle}
      siteURL={siteURL}
      siteDecription={siteDescription}
    />
  );
}

export default LayoutContainer;
