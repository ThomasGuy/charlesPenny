import path from 'path';
// Log out information after a build is done
export const onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`);
};
// Create pages dynamically
async function categoriesIntoPages({ graphql, actions, reporter }) {
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

    createPage({
      path: `/category/${slug}`,
      component: path.resolve(`src/templates/Gallery.js`),
      context: {
        title: node.name,
        slug,
      },
    });
  });
}

export async function createPages(params) {
  await Promise.all([categoriesIntoPages(params)]);
}
