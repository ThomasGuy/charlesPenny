import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMETADATA {
        site {
          siteMetadata {
            siteTitle: title
            siteUrl
            siteDescription: description
          }
        }
      }
    `
  );

  return { ...site.siteMetadata };
};

export default useSiteMetadata;
