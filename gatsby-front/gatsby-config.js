import dotenv from 'dotenv';

dotenv.config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
});

// eslint-disable-next-line import/first
import clientConfig from './client-config';

const token = process.env.SANITY_READ_TOKEN;
const isProd = process.env.NODE_ENV === 'production';

export default {
  siteMetadata: {
    title: 'Charles Penny Gallery',
    siteURL: 'https://charles.penny.co.uk',
    description: 'Gallery of pictures by Charles Penny',
    instagram: 'http://www.instagram.com/charles.penny',
  },
  plugins: [
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
        overlayDrafts: !isProd && token,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-svg',
    'gatsby-plugin-gatsby-cloud',
  ],
};
