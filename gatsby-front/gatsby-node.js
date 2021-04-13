// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Sport your Gatsby site has been built!`);
};
// Create pages dynamically
const categoryPages = async (graphql, actions, reporter) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
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
    const path = `/category/${slug}`;

    createPage({
      path,
      component: require.resolve(`./src/templates/Gallery.js`),
      context: {
        slug,
      },
    });
  });
};

const homePage = async (graphql, actions, reporter) => {
  const { createPage } = actions;

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
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const home = result.data.home || {};
  if (home) reporter.info('Home page created sucessfully!');

  createPage({
    path: '/home/',
    component: require.resolve(`./src/templates/Home.js`),
    context: {
      home,
    },
  });
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  await Promise.all([categoryPages(graphql, actions, reporter)]);
};
