/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import SanityImageBox from '../components/SanityImageBox';
import { mediaQuery } from '../styles/mediaQuery';
import { Modal } from '../components/SimpleModal';

const GalleryLayout = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 12rem;
  gap: 1.5rem;

  ${mediaQuery('sm')`
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
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
      console.log(evt.target.nodeName);
      setOpen(true);
      setIndex(parseInt(evt.target.attributes.idx.value));
      console.log(indexRef.current);
    },
    [setIndex, setOpen]
  );

  const handleKeyUp = useCallback(
    e => {
      const keys = {
        27: () => {
          e.preventDefault();
          setOpen(state => !state);
          // window.removeEventListener('keyup', handleKeyUp, false);
        },
      };

      if (keys[e.keyCode]) {
        keys[e.keyCode]();
      }
    },
    [setOpen]
  );

  useEffect(() => {
    // window.addEventListener('keyup', handleKeyUp, false);
    document.addEventListener('click', clickHandler, false);

    return () => {
      // window.removeEventListener('keyup', handleKeyUp, false);
      document.removeEventListener('click', clickHandler, false);
    };
  }, [clickHandler, handleKeyUp]);

  return (
    <GalleryLayout onClick={clickHandler}>
      {pictures}
      {openModal && (
        <Modal onCloseRequest={() => setOpen(false)}>{pictures[index]}</Modal>
      )}
    </GalleryLayout>
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
      }
    }
  }
`;
