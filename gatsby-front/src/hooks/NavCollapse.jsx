import React from 'react';
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

const NavCollape = ({ list, dropref }) => {
  const categories = list.map(cat => (
    <MenuItemStyled key={cat._id}>
      <Link to={`/category/${cat.slug.current}`}>{cat.name}</Link>
    </MenuItemStyled>
  ));

  return (
    <DropDown
      ref={dropref}
      initial={{ opacity: 0, x: '-110%' }}
      animate={{ opacity: 0.9, x: '5%' }}
      exit={{ opacity: 0, x: '-110%' }}
      transition={{ ease: 'easeOut', duration: 0.5 }}
      key="subject">
      {categories}
      <MenuItemStyled key="contact" id="contact">
        <Link to="/contact">Contact</Link>
      </MenuItemStyled>
    </DropDown>
  );
};

export default NavCollape;
