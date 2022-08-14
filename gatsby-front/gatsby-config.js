const dotenv = require('dotenv');

dotenv.config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
});

const clientConfig = require('./client-config');

const token = process.env.SANITY_READ_TOKEN;
const isProd = process.env.NODE_ENV === 'production';
const previewEnabled =
  (process.env.GATSBY_IS_PREVIEW || 'false').toLowerCase() === 'true';

module.exports = {
  siteMetadata: {
    title: 'Charles Penny Gallery',
    siteUrl: 'https://charlespenny.uk',
    description: 'A Gallery website of works by Charles Penny Artist',
    author: 'Thomas Guy <twguy.weddev@gmail.com>',
    instagram: 'http://www.instagram.com/charles.penny',
    facebook: 'https://www.facebook.com/charlespennyartist',
  },
  plugins: [
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token,
        watchMode: !isProd,
        useCdn: isProd,
        overlayDrafts: !isProd && previewEnabled,
      },
    },
    'gatsby-plugin-react-svg',
    'gatsby-plugin-netlify',
  ],
};
