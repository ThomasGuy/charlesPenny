/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { graphql } from 'gatsby';

import SanityImageBox from '../components/SanityImageBox';
import { Modal } from '../components/SimpleModal/Modal';
import SEO from '../components/SEO';
import { useBreakpoint } from '../hooks/useBreakpoint';
import { TitleContext } from '../components/Layout';
import { GalleryLayout } from '../styles';

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
      title: data.title.name,
      id,
      show: category.border,
      dimensions,
      aspectratio: image.asset.metadata.dimensions.aspectRatio,
    };
  });

  const sorted = imgProps.sort(function (p1, p2) {
    return p2.aspectratio - p1.aspectratio;
  });

  const pictures = sorted.map((props, idx) => {
    const { aspectratio, ...others } = props;
    return <SanityImageBox mql={mql} idx={idx} {...others} />;
  });

  const clickHandler = useCallback(
    evt => {
      if (evt.target.nodeName !== 'IMG') {
        return;
      }
      if (evt.target.attributes.idx) {
        setIndex(parseInt(evt.target.attributes.idx.value));
        setOpen(true);
      }
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
      {mql.navChange && openModal && (
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
              gatsbyImageData(placeholder: BLURRED, height: 800)
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
