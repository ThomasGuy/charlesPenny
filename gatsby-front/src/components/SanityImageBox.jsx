import React from 'react';
import SanityImage from 'gatsby-plugin-sanity-image';
import styled from 'styled-components';

const Box = styled.div`
  width: 100%;
  height: auto;

  img {
    width: 100%;
    border: ${props => (props.show ? `25px solid var(--offWhite)` : `none`)};
  }
  p {
    text-align: center;
    color: var(--white);
    opacity: 0.9;
    font-size: 1.8rem;
    margin: 0 0 2.5rem 0;
    padding-bottom: 1rem;
    line-height: 1.8;
  }
  .dim {
    color: var(--offWhite);
    opacity: 0.8;
    font-size: 1.5rem;
  }
`;

const SanityImageBox = ({ image, name, show, sizes = null }) => (
  <Box show={show}>
    <SanityImage {...image} alt={name} />
    <p>
      {name}
      {'  '}
      <span className="dim">
        {sizes ? `  ${sizes.height}x${sizes.width}cm` : ``}
      </span>
    </p>
  </Box>
);

export default SanityImageBox;
