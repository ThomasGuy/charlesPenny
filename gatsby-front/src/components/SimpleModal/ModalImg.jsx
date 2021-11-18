import React from 'react';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import { SoldTagModal } from '../../styles';

export const ModalBox = styled.div`
  position: relative;
  margin: 0 auto;
  width: auto;
  height: 850px;
  background-color: #131111;
`;

const Box = styled.div`
  max-height: 760px;
  width: auto;
  padding: 0 3rem;
  /* display: grid;
  justify-content: center center;
  grid-template-rows: 2fr 12fr 1fr; */
  p {
    text-align: center;
    color: var(--offWhite);
    opacity: 0.8;
    margin: 0;
    margin-top: 0.3rem;
    padding-bottom: 1rem;
    font-size: 3rem;
    line-height: 1.6;
  }
  .dim {
    padding-top: 1rem;
    font-size: 1.4rem;
  }
  img {
    max-height: 740px;
    width: auto;
    object-fit: contain;
  }
`;

export const ModalImg = props => {
  const { image, sold, subject, artist, dimensions } = props;
  const caption = dimensions
    ? `${artist} - ${dimensions.width}x${dimensions.height}cm`
    : `${artist}`;
  return (
    <Box>
      <p className="title">{subject}</p>
      <GatsbyImage
        image={image.asset.gatsbyImageData}
        alt={subject}
        title={caption}
        loading="eager"
      />
      <p className="dim">{caption}</p>
      {sold && <SoldTagModal>SOLD</SoldTagModal>}
    </Box>
  );
};
