const path = require(`path`);
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Sport your Gatsby site has been built!`);
};
// Create pages dynamically
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const galleryTemplate = path.resolve('./src/templates/Gallery.jsx');

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

  const categories = (result.data.allSanityCategory || {}).edges || [];

  categories?.forEach(({ node }) => {
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
