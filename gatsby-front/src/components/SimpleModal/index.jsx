import React, { useRef, useEffect, useCallback, useState } from 'react';
import { Button, ModalBox, ModalWrapper } from './modalStyle';

export function Modal({ onCloseRequest, children }) {
  const modal = useRef(null);

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

  const handleOutsideClick = useCallback(
    e => {
      if (modal.current && !modal.current.contains(e.target)) {
        onCloseRequest();
      }
    },
    [onCloseRequest]
  );

  useEffect(() => {
    // document.addEventListener('keyup', handleKeyUp, false);
    document.addEventListener('click', handleOutsideClick, false);

    return () => {
      // document.removeEventListener('keyup', handleKeyUp, false);
      document.removeEventListener('click', handleOutsideClick, false);
    };
  }, [handleOutsideClick]);

  return (
    <ModalWrapper>
      <Button type="button" onClick={onCloseRequest}>
        X
      </Button>
      <ModalBox ref={modal}>{children}</ModalBox>
    </ModalWrapper>
  );
}

function SimpleModal({ children, buttonLabel = 'Open Modal' }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button type="button" onClick={() => setOpen(true)}>
        {buttonLabel}
      </button>
      {children}
      {open && <Modal onCloseRequest={() => setOpen(false)}>{children}</Modal>}
    </div>
  );
}

export default SimpleModal;
