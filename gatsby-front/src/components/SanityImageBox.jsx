import React from 'react';
// import { GatsbyImage } from 'gatsby-plugin-image';
import SanityImage from 'gatsby-plugin-sanity-image';
import styled from 'styled-components';

const Box = styled.div`
  width: 100%;
  height: auto;

  p {
    text-align: center;
    color: var(--white);
    opacity: 0.9;
    font-size: 1.8rem;
    margin: 0;
    padding-bottom: 1rem;
    line-height: 1.8;
  }
  .dim {
    color: var(--offWhite);
    opacity: 0.8;
    font-size: 1.5rem;
  }
  img {
    border: ${props => (props.show ? '25px solid rgb(237, 237, 237)' : '')};
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

const SanityImageBox = ({
  image,
  name,
  show = false,
  dimensions = {},
  alt,
  idx,
  width,
}) => (
  <Box show={show}>
    <SanityImage {...image} width={width} alt={alt} idx={idx} loading="eager" />

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

export default SanityImageBox;
