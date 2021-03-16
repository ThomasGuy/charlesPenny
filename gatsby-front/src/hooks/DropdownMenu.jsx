/* eslint-disable react/prop-types */
import { Link } from 'gatsby';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import useDetectOutsideClick from './useDetectOutsideClick';

const Dropdown = styled.div`
  min-width: 100px;
  max-width: 180px;
  flex: 1;
  margin: 5px;

  .menu {
    background: var(--background);
    border-radius: 8px;
    position: absolute;
    top: 60px;
    left: 10px;
    width: 250px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px) translateX(-100px);
    transition: opacity 0.9s ease, transform 0.9s ease, visibility 0.9s;
    z-index: 10;
  }

  .menu.active {
    opacity: 0.85;
    visibility: visible;
    transform: translateY(0) translateX(0);
  }

  .menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .menu li {
    border-bottom: 1px solid #dddddd;
  }

  .menu li a {
    text-decoration: none;
    color: #fefefe;
    padding: 15px 20px;
    display: block;
  }
`;

const Button = styled.button`
  display: block;
  background-color: purple;
  border-radius: 20px;
  border-width: 0;
  margin: 5px;
  padding: 4px;
  box-shadow: 2px 4px #b9b3b3aa;
  color: lightgrey;
  text-align: center;
  cursor: pointer;
  width: 100%;

  &:hover,
  &:focus {
    background-color: var(--buttonf);
    outline: none;
  }
`;

const DropdownMenu = ({ items, title, header }) => {
  const linkRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(linkRef, false);
  const onClick = () => setIsActive(!isActive);
  const slugIn = title.slice(0, -1).toLowerCase();

  useEffect(() => {
    const { height } = header.current.getBoundingClientRect();
    linkRef.current.style.top = `${height}px`;
  }, [header]);

  return (
    <Dropdown>
      <Button type="button" onClick={onClick}>
        {title}
      </Button>

      <nav ref={linkRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
        <ul>
          {items.map(item => (
            <li key={item.id}>
              <Link to={`/gallery/${slugIn}/${item.slug.current}`}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Dropdown>
  );
};

export default DropdownMenu;
