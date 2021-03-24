/* eslint-disable react/prop-types */

import { graphql } from 'gatsby';
import SanityImage from 'gatsby-plugin-sanity-image';
import React from 'react';
import styled from 'styled-components';

const GalleryLayout = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 12rem;
  gap: 1.5rem;

  @media screen and (min-width: 476px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  @media screen and (min-width: 668px) {
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 18rem;
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const Box = styled.div`
  width: 100%;
  height: auto;
  /* margin-top: 3rem; */
  img {
    width: 100%;
    border: 25px solid var(--offWhite);
  }
  p {
    text-align: center;
    color: var(--offWhite);
    opacity: 0.8;
    font-size: 1.7rem;
    margin: 0 0 2.5rem 0;
    padding-bottom: 1rem;
  }
`;

const SanityImageBox = ({ image, name }) => (
  <Box>
    <SanityImage {...image} alt={name} />
    <p>{name}</p>
  </Box>
);

const Gallery = ({ data }) => {
  const pictures = data.allSanityPicture.edges.map(({ node }) => {
    const { image, name, id } = node;
    return <SanityImageBox name={name} image={image} key={id} />;
  });

  return <GalleryLayout>{pictures}</GalleryLayout>;
};

export default Gallery;

export const pageQuery = graphql`
  query GalleryPageQuery($slug: String!) {
    allSanityPicture(
      filter: { category: { slug: { current: { eq: $slug } } } }
      sort: { fields: image___asset___fluid___aspectRatio, order: DESC }
    ) {
      edges {
        node {
          name
          id
          image {
            ...ImageWithPreview
          }
        }
      }
    }
  }
`;
