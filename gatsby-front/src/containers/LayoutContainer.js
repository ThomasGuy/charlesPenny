import React from 'react';
import Layout from '../components/Layout';
import useSiteMetadata from '../hooks/useSiteMetadata';

function LayoutContainer(props) {
  const { siteTitle, siteUrl, siteDescription } = useSiteMetadata();

  return (
    <Layout
      {...props}
      siteTitle={siteTitle}
      siteUrl={siteUrl}
      siteDecription={siteDescription}
    />
  );
}

export default LayoutContainer;
