/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
// import { config, useSpring } from 'react-spring';
import React, { useRef, useCallback, useState } from 'react';
import { ModalBox, ModalImg } from './ModalImg';
import { Button, ModalWrapper } from './modalStyle';
import Next from './NextButton';

export function Modal({ onCloseRequest, index, imgProps }) {
  // const modal = useRef(null);
  const idxRef = useRef(index);
  const [_index, _setIndex] = useState(index);

  const pictures = imgProps.map(props => {
    const { image, sold, title, name, dimensions, ...rest } = props;

    return (
      <ModalImg
        image={image}
        sold={sold}
        title={title}
        name={name}
        dimensions={dimensions}
        {...rest}
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

  return (
    <ModalWrapper>
      <Button type="button" onClick={onCloseRequest}>
        X
      </Button>
      <Next left slider={() => setIndex(idxRef.current - 1)} />
      <ModalBox>{pictures[_index]}</ModalBox>
      <Next left={false} slider={() => setIndex(idxRef.current + 1)} />
    </ModalWrapper>
  );
}
