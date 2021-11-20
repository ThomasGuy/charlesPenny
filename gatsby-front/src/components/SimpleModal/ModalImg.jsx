/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { animated, useSpring, config } from 'react-spring';
import { SoldTagModal } from '../../styles';

const Box = styled(animated.div)`
  height: calc(100vh - 5rem);
  width: auto;
  padding: 1rem 5rem 0;

  p {
    text-align: center;
    margin: 0;
    height: 3rem;
    padding: 0.6rem 2rem;
    font-size: 1.8rem;
    opacity: 0.8;
    /* line-height: 2rem; */
  }

  img {
    max-height: calc(100vh - 10rem);
    width: auto;
    object-fit: contain;
  }
`;

export const ModalImg = ({ imgProp, children }) => {
  const { sold, name, dimensions } = imgProp;
  const caption = dimensions
    ? `${name} - ${dimensions.width}x${dimensions.height}cm`
    : `${name}`;

  const api = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 200,
    config: config.molasses,
  });

  return (
    <Box style={api}>
      {children}
      <p>{caption}</p>
      {sold && <SoldTagModal>SOLD</SoldTagModal>}
    </Box>
  );
};
