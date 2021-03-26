/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import SanityImageBox from '../components/SanityImageBox';
import { mediaQueries } from '../styles';

const GalleryLayout = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 12rem;
  gap: 1.5rem;

  ${mediaQueries('sm')`
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  `};

  ${mediaQueries('md')`
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 18rem;
  `};

  ${mediaQueries('lg')`
    grid-template-columns: 1fr 1fr 1fr 1fr;
  `};
`;

const Gallery = ({ data }) => {
  const { pics, cat } = data;
  const pictures = pics.edges.map(({ node }) => {
    const { image, name, id, dimensions } = node;
    return (
      <SanityImageBox
        name={name}
        image={image}
        key={id}
        show={cat.nodes[0].border}
        sizes={dimensions}
      />
    );
  });

  return <GalleryLayout>{pictures}</GalleryLayout>;
};

export default Gallery;

export const pageQuery = graphql`
  query GalleryPageQuery($slug: String!) {
    pics: allSanityPicture(
      filter: { category: { slug: { current: { eq: $slug } } } }
      sort: { fields: image___asset___fluid___aspectRatio, order: DESC }
    ) {
      edges {
        node {
          dimensions {
            height
            width
          }
          name
          id
          image {
            ...ImageWithPreview
          }
        }
      }
    }
    cat: allSanityCategory(filter: { slug: { current: { eq: $slug } } }) {
      nodes {
        border
      }
    }
  }
`;
