import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: 'Charles Penny',
    siteUrl: 'https://charles.penny.co.uk',
    description: 'Gallery website',
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        token: process.env.SANITY_TOKEN,
        watchMode: true,
      },
    },
    {
      resolve: 'gatsby-plugin-sanity-image',
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        token: process.env.SANITY_TOKEN,
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-svg',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/assets/typography`,
      },
    },
    // {
    //   resolve: 'gatsby-plugin-manifest',
    //   options: {
    //     icon: 'src/images/icon.png',
    //   },
    // },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'images',
    //     path: './src/images/',
    //   },
    //   __key: 'images',
    // },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'pages',
    //     path: `${__dirname}/src/images`,
    //   },
    //   __key: 'pages',
    // },
  ],
};
