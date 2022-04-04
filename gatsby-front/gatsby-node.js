const path = require(`path`);
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Sport your Gatsby site has been built!`);
};
// Create pages dynamically
const categoryPages = async (graphql, actions, reporter) => {
  const { createPage } = actions;
  const galleryTemplate = path.resolve('./src/templates/Gallery.js');

  const result = await graphql(`
    query {
      allSanityCategory {
        edges {
          node {
            slug {
              current
            }
            id
            name
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const catgories = (result.data.allSanityCategory || {}).edges || [];
  catgories.forEach(({ node }) => {
    const slug = node.slug.current;

    createPage({
      path: `/category/${slug}`,
      component: galleryTemplate,
      context: {
        slug,
      },
    });
  });
};

const homePage = async (graphql, actions, reporter) => {
  const { createPage } = actions;
  const homeTemplate = path.resolve(`./src/templates/Home.js`);

  const result = await graphql(`
    {
      home: sanityHome {
        events {
          _key
          name
          address {
            road
            postcode
            number
            country
            city
          }
          dates {
            finish(formatString: "DD-MM-YY")
            start(formatString: "DD-MM-YY")
          }
          about
        }
        biography
        image {
          asset {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            url
          }
        }
      }
      title: site {
        siteMetadata {
          title
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const home = result.data.home || {};
  const { title } = result.data.title.siteMetadata;
  if (home) reporter.info('Home page created sucessfully!');

  createPage({
    path: '/home/',
    component: homeTemplate,
    context: {
      home,
      title,
    },
  });
};

const contactPage = async (graphql, actions, reporter) => {
  const { createPage } = actions;
  const contactTemplate = path.resolve(`./src/templates/Contact.js`);

  const result = await graphql(`
    {
      contact: sanityContact {
        name
        biography
        email
        links {
          href
          name
        }
        image {
          asset {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            url
          }
        }
        mug {
          asset {
            gatsbyImageData(layout: CONSTRAINED, width: 200)
            url
          }
        }
        social {
          facebook
          instagram
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error on contact page while running GraphQL query.`);
    return;
  }

  const contact = result.data.contact || {};
  if (contact) reporter.info('Contact page created sucessfully!');

  createPage({
    path: '/contact/',
    component: contactTemplate,
    context: {
      contact,
    },
  });
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  await Promise.all([
    categoryPages(graphql, actions, reporter),
    contactPage(graphql, actions, reporter),
    homePage(graphql, actions, reporter),
  ]);
};
