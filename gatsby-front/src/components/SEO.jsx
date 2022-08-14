import React from 'react';
// import PropTypes from 'prop-types';
import useSiteMetadata from '../hooks/useSiteMetadata';

function SEO({ children, location, description, title }) {
  const {
    title: siteTitle,
    description: siteDescription,
    author,
    siteUrl,
    instagram,
    facebook,
  } = useSiteMetadata();

  const seo = {
    title: title || siteTitle || 'Wednesday Isolationists',
    description: description || siteDescription,
    url: `${siteUrl}${location?.pathname || ``}`,
    instagram,
    facebook,
    author,
  };

  return (
    <>
      <title>{seo.title}</title>
      <link rel="icon" type="image/png" href="/favicon.ico" />
      <link rel="alternate icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta name="description" content={seo.description} />
      <meta name="author" content={seo.author} />
      <meta name="instagram" content={seo.instagram} />
      <meta name="facebook" content={seo.facebook} />
      <meta name="url" content={seo.url} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} key="ogtitle" />
      <meta property="og:site_name" content={seo.title} key="ogsitename" />
      <meta property="og:description" content={seo.description} key="ogdescription" />
      <meta property="og:author" content={seo.author} key="ogauthor" />
      <meta property="og:instagram" content={seo.instagram} key="oginstagram" />
      <meta property="og:facebook" content={seo.facebook} key="ogfacebook" />
      {children}
    </>
  );
}

export default SEO;

// SEO.defaultProps = {
//   // imageSrc: PropTypes.string,
//   children: PropTypes.node,
//   location: PropTypes.any,
//   title: null,
//   description: null,
// };

// SEO.propTypes = {
//   title: PropTypes.string,
//   description: PropTypes.string,
//   // imageSrc: PropTypes.string,
//   children: PropTypes.node,
//   // eslint-disable-next-line react/forbid-prop-types
//   location: PropTypes.any,
// };
