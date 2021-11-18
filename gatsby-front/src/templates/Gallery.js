/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import SanityImageBox from '../components/SanityImageBox';
import { mediaQuery } from '../styles/mediaQuery';
import { Modal } from '../components/_SimpleModal';
import SEO from '../components/SEO';
import { useBreakpoint } from '../hooks/useBreakpoint';
import { TitleContext } from '../components/Layout';

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
  `};

  ${mediaQuery('navChange')`
    margin-top: 18rem;
  `};

  ${mediaQuery('lg')`
    grid-template-columns: 1fr 1fr 1fr 1fr;
  `};
`;

const Gallery = ({ data }) => {
  const { setTitle } = useContext(TitleContext);
  const [openModal, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const mql = useBreakpoint();

  useEffect(() => {
    setTitle(data.title.name);
  }, [setTitle, data.title.name]);

  const imgProps = data.pics.edges.map(({ node }) => {
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

  const sorted = imgProps.sort(function (p1, p2) {
    return p2.aspectRatio - p1.aspectRatio;
  });

  const pictures = sorted.map((props, idx) => {
    const { aspectRatio, ...others } = props;
    return <SanityImageBox idx={idx} mql={mql} {...others} />;
  });

  // const setIndex = useCallback(
  //   idx => {
  //     idx += imgProps.length;
  //     idx %= imgProps.length;
  //     indexRef.current = idx;
  //     _setIndex(idx);
  //   },
  //   [imgProps.length]
  // );

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
      <SEO title={data.title.name} />
      {pictures.map(pic => {
        const { image, id } = pic.props;
        return (
          <div key={id}>
            <SEO imageSrc={image.asset.url} />
            {pic}
          </div>
        );
      })}
      {openModal && (
        <Modal
          onCloseRequest={() => setOpen(false)}
          index={index}
          imgProps={imgProps}
        />
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
    title: sanityCategory(slug: { current: { eq: $slug } }) {
      name
    }
  }
`;
