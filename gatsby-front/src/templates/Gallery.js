/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import SanityImageBox from '../components/SanityImageBox';
import { mediaQuery } from '../styles/mediaQuery';
import { Modal } from '../components/SimpleModal';
import SEO from '../components/SEO';

const GalleryLayout = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 12rem;
  gap: 2rem;

  ${mediaQuery('sm')`
    grid-template-columns: 1fr 1fr;
    row-gap: 3rem;
    column-gap: 2rem;
  `};

  ${mediaQuery('md')`
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 18rem;
  `};

  ${mediaQuery('lg')`
    grid-template-columns: 1fr 1fr 1fr 1fr;
  `};
`;

const Gallery = ({ data }) => {
  const [openModal, setOpen] = useState(false);
  const [index, _setIndex] = useState(-1);
  const indexRef = useRef(index);
  const { pics, cat } = data;

  const pictures = pics.edges.map(({ node }, idx) => {
    const { image, name, id, dimensions } = node;
    return (
      <SanityImageBox
        name={name}
        image={image}
        key={id}
        show={cat.nodes[0].border}
        dimensions={dimensions}
        idx={idx}
        alt={name}
      />
    );
  });

  const setIndex = useCallback(
    idx => {
      idx += pictures.length;
      idx %= pictures.length;
      indexRef.current = idx;
      _setIndex(idx);
    },
    [pictures.length]
  );

  const clickHandler = useCallback(
    evt => {
      if (evt.target.nodeName !== 'IMG') {
        return;
      }
      setIndex(parseInt(evt.target.attributes.idx.value));
      setOpen(true);
    },
    [setIndex, setOpen]
  );

  useEffect(() => {
    window.addEventListener('click', clickHandler, false);

    return () => {
      window.removeEventListener('click', clickHandler, false);
    };
  }, [clickHandler]);

  return (
    <>
      <SEO
        title={cat.nodes[0].name}
        image={pics.edges[0].node.image?.asset?.fluid?.src}
      />
      <GalleryLayout onClick={clickHandler}>
        {pictures}
        {openModal && (
          <Modal onCloseRequest={() => setOpen(false)}>{pictures[index]}</Modal>
        )}
      </GalleryLayout>
    </>
  );
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
            asset {
              fluid {
                src
              }
              gatsbyImageData(
                layout: CONSTRAINED
                width: 600
                placeholder: BLURRED
              )
            }
          }
        }
      }
    }
    cat: allSanityCategory(filter: { slug: { current: { eq: $slug } } }) {
      nodes {
        border
        name
      }
    }
  }
`;
