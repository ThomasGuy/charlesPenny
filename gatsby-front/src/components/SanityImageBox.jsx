import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { mediaQuery } from '../styles/mediaQuery';

const Box = styled.div`
  width: 100%;
  height: auto;
  margin: o auto;

  p {
    text-align: center;
    color: var(--white);
    opacity: 0.9;
    margin: 0;
    margin-top: 0.3rem;
    padding-bottom: 1rem;
    font-size: 1.4rem;
    line-height: 1.6;

    .dim {
      color: var(--offWhite);
      opacity: 0.8;
      font-size: 1.2rem;
    }

    ${mediaQuery('sm')`
      font-size: 1.6rem;
      line-height: 1.8;
      .dim {
        font-size: 1.4rem;
      }
    `};
  }
`;

const SanityImageBox = ({
  image,
  name,
  alt,
  idx,
  mql = false,
  show = false,
  dimensions = {},
}) => {
  const trigger = mql?.navChange;
  return (
    <Box>
      <GatsbyImage
        image={image.asset.gatsbyImageData}
        title={alt}
        alt={alt}
        idx={idx}
        loading="eager"
        imgStyle={show && { border: `${trigger ? '12px' : '18px'} solid #fff` }}
      />

      {name && (
        <p>
          {name}{' '}
          <span className="dim">
            {dimensions ? `  ${dimensions.height}x${dimensions.width}cm` : ``}
          </span>
        </p>
      )}
    </Box>
  );
};

export default SanityImageBox;
