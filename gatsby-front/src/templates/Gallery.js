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

  const propsArray = data.pics.edges.map(({ node }) => {
    const { image, name, id, dimensions, category } = node;
    return {
      image,
      alt: name,
      name,
      id,
      show: category.border,
      dimensions,
      aspectRatio: image.asset.metadata.dimensions.aspectRatio,
    };
  });

  const sorted = propsArray.sort(function (p1, p2) {
    return p2.aspectRatio - p1.aspectRatio;
  });

  const pictures = sorted.map((props, idx) => {
    const { aspectRatio, ...others } = props;
    return <SanityImageBox idx={idx} {...others} />;
  });

  const setIndex = useCallback(
    idx => {
      idx += propsArray.length;
      idx %= propsArray.length;
      indexRef.current = idx;
      _setIndex(idx);
    },
    [propsArray.length]
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
    <GalleryLayout onClick={clickHandler}>
      {pictures.map(pic => {
        const { image, name, id } = pic.props;
        return (
          <div key={id}>
            <SEO title={name} imageSrc={image.asset.url} />
            {pic}
          </div>
        );
      })}
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
    ) {
      edges {
        node {
          id
          name
          category {
            border
          }
          dimensions {
            height
            width
          }
          image {
            asset {
              url
              metadata {
                dimensions {
                  aspectRatio
                }
              }
              gatsbyImageData(
                layout: CONSTRAINED
                width: 450
                placeholder: BLURRED
              )
            }
          }
        }
      }
    }
  }
`;
