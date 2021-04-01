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

  const project = (result.data.allSanityCategory || {}).edges || [];
  project.forEach(({ node }) => {
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

exports.createPages = async ({ graphql, actions, reporter }) => {
  await categoryPages(graphql, actions, reporter);
};
