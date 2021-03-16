/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import { graphql } from 'gatsby';
import SanityImage from 'gatsby-plugin-sanity-image';
import React from 'react';
import styled from 'styled-components';

const GalleryLayout = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 10rem;

  @media screen and (min-width: 476px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }

  @media screen and (min-width: 668px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
    margin-top: 16rem;
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const Box = styled.div`
  width: 100%;
  height: auto;
  p {
    text-align: center;
    color: var(--offWhite);
    opacity: 0.8;
    font-size: 1.7rem;
    margin: 0.6rem 0;
  }
  img {
    border: 25px solid var(--offWhite);
    box-shadow: var(--bs);
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
