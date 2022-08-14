import React from 'react';
import PropTypes from 'prop-types';
import useSiteMetadata from '../hooks/useSiteMetadata';

function SEO({ children, location, description, title, imageSrc }) {
  const {
    title: siteTitle,
    description: siteDescription,
    author,
    siteUrl,
    instagram,
    facebook,
    image,
  } = useSiteMetadata();

  const seo = {
    title: title || siteTitle || 'Wednesday Isolationists',
    description: description || siteDescription,
    url: `${siteUrl}${location?.pathname || ``}`,
    instagram,
    facebook,
    author,
    image: `${siteUrl}${image}`,
  };

  return (
    <>
      <title>{seo.title}</title>
      <link rel="icon" type="image/png" href="/favicon.ico" />
      <link rel="alternate icon" href="/favicon.ico" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
      />
      <meta charSet="utf-8" />
      <meta name="description" content={seo.description} />
      <meta name="author" content={seo.author} />
      <meta name="image" content={imageSrc || seo.image} />
      <meta name="instagram:url" content={seo.instagram} />
      <meta name="facebook:url" content={seo.facebook} />
      <meta name="url" content={seo.url} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} key="ogtitle" />
      <meta property="og:site_name" content={seo.title} key="ogsitename" />
      <meta property="og:description" content={seo.description} key="ogdescription" />
      <meta property="og:author" content={seo.author} key="ogauthor" />
      <meta property="og:image" content={imageSrc || seo.image} />
      <meta property="og:instagram:url" content={seo.instagram} key="oginstagram" />
      <meta property="og:facebook:url" content={seo.facebook} key="ogfacebook" />
      {children}
    </>
  );
}

export default SEO;

SEO.defaultProps = {
  children: PropTypes.node,
  location: PropTypes.any,
  title: '',
  description: '',
  imageSrc: '',
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
  // eslint-disable-next-line react/forbid-prop-types
  location: PropTypes.any,
  imageSrc: PropTypes.string,
};
