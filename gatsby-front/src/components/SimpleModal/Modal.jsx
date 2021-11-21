/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
import React, { useRef, useCallback, useState, useEffect } from 'react';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ModalImg } from './ModalImg';
import { Previous, Next } from './Buttons';
import { CloseModal } from './CloseModal';

const ModalWrapper = styled.div`
  position: fixed;
  display: grid;
  place-content: center center;
  gap: 0;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 200;
  opacity: 1;
  background-color: #1a1a1a;
`;

const ModalBox = styled.div`
  position: relative;
  width: auto;
  height: calc(100vh - 5rem);
  background-color: #131111;
`;

const Title = styled.h1`
  text-align: center;
  color: var(--offWhite);
  background-color: #131111;
  opacity: 0.8;
  padding: 0.3rem 3rem;
  padding-bottom: 1rem;
  margin: 0;
  height: 5rem;
  font-size: 3rem;
  line-height: 1.6;
  letter-spacing: 0.12rem;
`;

export function Modal({ onCloseRequest, index, imgProps }) {
  const idxRef = useRef(index);
  const [_index, _setIndex] = useState(index);

  const pictures = imgProps.map(props => {
    const { image, sold, name, dimensions } = props;
    return (
      <GatsbyImage
        image={image.asset.gatsbyImageData}
        loading="eager"
        alt={name}
        title={`${name} - Charles Penny`}
        sold={sold}
        dimensions={dimensions}
      />
    );
  });

  const setIndex = useCallback(
    idx => {
      idx += imgProps.length;
      idx %= imgProps.length;
      idxRef.current = idx;
      _setIndex(idx);
    },
    [imgProps.length]
  );

  const handleKeypress = useCallback(
    evt => {
      if (evt.keyCode === 39) setIndex(idxRef.current + 1);
      if (evt.keyCode === 37) setIndex(idxRef.current - 1);
    },
    [setIndex]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeypress);

    return () => {
      document.removeEventListener('keydown', handleKeypress);
    };
  }, [handleKeypress]);

  return (
    <ModalWrapper>
      <Title>{imgProps[_index].title}</Title>
      <CloseModal close={() => onCloseRequest()} />
      <Previous slider={() => setIndex(idxRef.current - 1)} />
      <ModalBox>
        <ModalImg imgProp={imgProps[_index]}>{pictures[_index]}</ModalImg>
      </ModalBox>
      <Next slider={() => setIndex(idxRef.current + 1)} />
    </ModalWrapper>
  );
}
