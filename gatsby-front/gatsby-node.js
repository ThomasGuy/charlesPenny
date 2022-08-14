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

// const contactPage = async (graphql, actions, reporter) => {
//   const { createPage } = actions;
//   const contactTemplate = path.resolve(`./src/templates/Contact.jsx`);

//   const result = await graphql(`
//     {
//       contact: sanityContact {
//         name
//         biography
//         email
//         links {
//           href
//           name
//         }
//         image {
//           asset {
//             gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
//             url
//           }
//         }
//         mug {
//           asset {
//             gatsbyImageData(layout: CONSTRAINED, width: 200)
//             url
//           }
//         }
//         social {
//           facebook
//           instagram
//         }
//       }
//     }
//   `);

//   // Handle errors
//   if (result.errors) {
//     reporter.panicOnBuild(`Error on contact page while running GraphQL query.`);
//     return;
//   }

//   const contact = result.data.contact || {};
//   if (contact) reporter.info('Contact page created sucessfully!');

//   createPage({
//     path: '/contact/',
//     component: contactTemplate,
//     context: {
//       contact,
//     },
//   });
// };

// exports.createPages = async ({ graphql, actions, reporter }) => {
//   await Promise.all([
//     categoryPages(graphql, actions, reporter),
//     // contactPage(graphql, actions, reporter),
//     // homePage(graphql, actions, reporter),
//   ]);
// };
