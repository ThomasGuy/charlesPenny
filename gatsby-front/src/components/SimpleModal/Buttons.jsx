/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import LeftArrow from './icons/svg/arrow_double_left.svg';
import RightArrow from './icons/svg/arrow_double_right.svg';

const Button = styled.div`
  position: absolute;
  top: calc(100vh / 2);
  z-index: 15;

  display: grid;
  place-content: center center;
  width: 3.8rem;
  height: 3.8rem;
  margin: 0 2rem;
  opacity: 0.6;
  transition: filter 300ms;
  cursor: pointer;
  background-color: #222020;

  svg {
    fill: var(--offWhite);
    width: 40px;
    height: 40px;
  }

  &:hover {
    filter: brightness(1.5);
  }
`;

export const Previous = ({ slider }) => (
  <Button style={{ left: '20px' }} onClick={slider}>
    <LeftArrow />
  </Button>
);

export const Next = ({ slider }) => (
  <Button style={{ right: '20px' }} onClick={slider}>
    <RightArrow />
  </Button>
);
