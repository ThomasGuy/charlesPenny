import { Link } from 'gatsby';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import useDetectOutsideClick from './useDetectOutsideClick';

const LinkStyle = styled.div`
  .menu-trigger {
    display: block;
    background-color: purple;
    border-radius: 20px;
    margin: 5px;
    box-shadow: 2px 4px #b9b3b3aa;
    border: 0px;
    color: lightgrey;
    text-align: center;
    cursor: pointer;

    flex-grow: 1;
    min-width: 100px;
    max-width: 180px;
    width: 100%;

    &:hover,
    &:focus {
      background-color: #b22cb2;
    }
  }

  .menu {
    background: #ffffff;
    border-radius: 8px;
    position: absolute;
    top: 60px;
    right: 0;
    width: 300px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: opacity 0.9s ease, transform 0.9s ease, visibility 0.9s;
    z-index: 10;
  }

  .menu.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
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
    color: #333333;
    padding: 15px 20px;
    display: block;
  }
`;

const MyLink = ({ title, items }) => {
  const linkRef = useRef(null);
  const trigger = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(linkRef, false);
  const slugIn = title.slice(0, -1).toLowerCase();

  useEffect(() => {
    const handleCLickevent = () => {
      setIsActive(!isActive);
    };
    const { current } = trigger;

    current.addEventListener('click', handleCLickevent);

    return () => {
      current.removeEventListener('click', handleCLickevent);
    };
  });

  return (
    <LinkStyle>
      <span ref={trigger} className="menu-trigger">
        {title}
      </span>

      <nav ref={linkRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
        <ul>
          {items.map(item => (
            <li key={item.id}>
              <Link to={`/gallery/${slugIn}/${item.slug.current}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </LinkStyle>
  );
};

export default MyLink;
