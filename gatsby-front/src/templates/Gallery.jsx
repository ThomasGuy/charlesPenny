/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import React, { useCallback, useEffect, useState } from 'react';
import { graphql } from 'gatsby';

import SanityImageBox from '../components/SanityImageBox';
import { Modal } from '../components/SimpleModal/Modal';
import SEO from '../components/SEO';
import { useBreakpoint } from '../hooks/useBreakpoint';
import { useTitleContext } from '../hooks/TitleContext';
import { GalleryLayout } from '../styles';

const Gallery = ({ data }) => {
  const { setPageTitle } = useTitleContext();
  const [openModal, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const mql = useBreakpoint();

  useEffect(() => {
    setPageTitle(data.title.name);
  }, [setPageTitle, data.title.name]);

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

  // eslint-disable-next-line func-names
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
        setIndex(parseInt(evt.target.attributes.idx.value, 10));
        setOpen(true);
      }
    },
    [setIndex, setOpen],
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
        const { id } = pic.props;
        return <div key={id}>{pic}</div>;
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
    pics: allSanityPicture(filter: { category: { slug: { current: { eq: $slug } } } }) {
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

export const Head = ({ data }) => {
  const { name: title } = data.title;
  // const arr = data.pics.edges;
  // const url = arr.length > 0 ? arr[0].image.url : '';
  return <SEO title={`Charles Penny ${title}`} />;
};
