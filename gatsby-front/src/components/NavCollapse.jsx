import React, { useCallback } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';

// Dropdown styles
const DropDown = styled(motion.div)`
  position: absolute;
  top: calc(var(--nav-size) * 1.1);
  left: 0;
  width: 180px;
  background-color: var(--black);
  border: var(--border);
  border-radius: var(--border-radius);
  padding: 15px;
  overflow: hidden;
  z-index: 20;

  #contact {
    border-top: 1px solid var(--grey);
    opacity: 0.7;
    border-radius: 0 0 8px 8px;
  }
`;

const MenuItemStyled = styled.div`
  height: 45px;
  display: flex;
  gap: 5px;
  align-items: center;
  border-radius: var(--border-radius);
  padding: 0.5rem;
  color: var(--offWhite);

  &:hover {
    background-color: #525357;
  }
`;

const NavCollape = ({ list, dropref, setOpen }) => {
  const handleClick = useCallback(
    evt => {
      if (evt.target.nodeName !== 'A') {
        return;
      }
      setOpen(false);
    },
    [setOpen]
  );

  const handleTouchStart = useCallback(
    evt => {
      if (evt.target.nodeName !== 'A') {
        return;
      }
      setOpen(false);
    },
    [setOpen]
  );

  // const handleKey = useCallback(
  //   evt => {
  //     if (evt.target.nodeName !== 'A') {
  //       return;
  //     }
  //     // keyCode = 9 "tab"
  //     if (evt.keyCode === 9) {
  //       setOpen(state => !state);
  //     }
  //   },
  //   [setOpen]
  // );

  const categories = list.map((cat, idx) => (
    <MenuItemStyled key={cat._id} nav-index={idx + 1}>
      <Link
        to={`/category/${cat.slug.current}`}
        activeStyle={{ color: 'yellow' }}>
        {cat.name}
      </Link>
    </MenuItemStyled>
  ));

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      ref={dropref}
      onClick={handleClick}
      onTouchStart={handleTouchStart}
      role="button"
      tabIndex={0}>
      <DropDown
        initial={{ opacity: 0, x: '-110%' }}
        animate={{ opacity: 0.9, x: '5%' }}
        exit={{ opacity: 0, x: '-110%' }}
        transition={{ ease: 'easeOut', duration: 0.5 }}
        key="subject">
        {categories}
        <MenuItemStyled key="contact" id="contact">
          <Link to="/contact" activeStyle={{ color: 'yellow', opacity: '1' }}>
            Contact
          </Link>
        </MenuItemStyled>
      </DropDown>
    </div>
  );
};

export default NavCollape;
