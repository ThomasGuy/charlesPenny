import { graphql, useStaticQuery } from 'gatsby';

function useSiteMetadata() {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
          instagram
          facebook
        }
      }
    }
  `);

  return { ...site.siteMetadata };
}

export default useSiteMetadata;
