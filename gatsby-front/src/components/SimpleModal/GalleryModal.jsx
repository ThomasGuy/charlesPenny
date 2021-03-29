import React, { useState } from 'react';
import Modal from '.';

function GalleryModal({ children, idx }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(idx);
  console.log('children ', children);
  return (
    <div>
      {children}
      {open && (
        <Modal onCloseRequest={() => setOpen(false)}>{children[index]}</Modal>
      )}
    </div>
  );
}

export default GalleryModal;
