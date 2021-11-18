/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
import React, { useRef, useCallback, useState } from 'react';
import { ModalBox, ModalImg } from './ModalImg';
import { Button, ModalWrapper } from './modalStyle';
import Next from './NextButton';

export function Modal({ onCloseRequest, index, imgProps }) {
  const modal = useRef(null);
  const idxRef = useRef(index);
  const [_index, _setIndex] = useState(index);

  const pictures = imgProps.map(props => {
    const { image, sold, subject, artist, dimensions } = props;
    return (
      <ModalImg
        image={image}
        sold={sold}
        subject={subject}
        artist={artist}
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
    [imgProps.length],
  );

  // const handleKeyUp = useCallback(
  //   e => {
  //     const keys = {
  //       27: () => {
  //         e.preventDefault();
  //         onCloseRequest();
  //         document.removeEventListener('keyup', handleKeyUp, false);
  //       },
  //     };

  //     if (keys[e.keyCode]) {
  //       keys[e.keyCode]();
  //     }
  //   },
  //   [onCloseRequest]
  // );

  // const handleOutsideClick = useCallback(
  //   e => {
  //     if (
  //       modal.current &&
  //       !modal.current.contains(e.target) &&
  //       !btnRef.current.contains(e.target)
  //     ) {
  //       onCloseRequest();
  //     }
  //   },
  //   [onCloseRequest],
  // );

  // useEffect(() => {
  //   // document.addEventListener('keyup', handleKeyUp, false);
  //   document.addEventListener('click', handleOutsideClick, false);

  //   return () => {
  //     // document.removeEventListener('keyup', handleKeyUp, false);
  //     document.removeEventListener('click', handleOutsideClick, false);
  //   };
  // }, [handleOutsideClick]);

  return (
    <ModalWrapper>
      <Button type="button" onClick={onCloseRequest}>
        X
      </Button>
      <Next left slider={() => setIndex(idxRef.current - 1)} />
      <ModalBox left ref={modal}>
        {pictures[_index]}
      </ModalBox>
      <Next left={false} slider={() => setIndex(idxRef.current + 1)} />
    </ModalWrapper>
  );
}
