const dotenv = require('dotenv');

dotenv.config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
});

// eslint-disable-next-line import/first
const clientConfig = require('./client-config');

const token = process.env.SANITY_READ_TOKEN;
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  siteMetadata: {
    title: 'Charles Penny Gallery',
    siteUrl: 'https://charlespenny.co.uk',
    description: 'Art works by Charles Penny',
    author: 'Thomas Guy <twguy.weddev@gmail.com>',
    instagram: 'http://www.instagram.com/charles.penny',
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
        overlayDrafts: !isProd && token,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-svg',
    'gatsby-plugin-netlify',
  ],
};
