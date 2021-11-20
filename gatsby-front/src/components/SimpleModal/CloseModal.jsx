/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import CloseButton from './icons/svg/close.svg';

const Button = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 25;

  display: grid;
  place-content: center center;
  width: 3.8rem;
  height: 3.8rem;
  margin: 1rem;
  opacity: 0.6;
  transition: filter 300ms;
  cursor: pointer;
  background-color: #222020;

  svg {
    fill: var(--offWhite);
    width: 50px;
    height: 50px;
  }

  &:hover {
    filter: brightness(1.5);
  }
`;

export const CloseModal = ({ close }) => (
  <Button onClick={close}>
    <CloseButton />
  </Button>
);
