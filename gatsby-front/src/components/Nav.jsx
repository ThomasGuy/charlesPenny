import React, { useCallback, useEffect, useRef, useState } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import MediaQuery from 'react-responsive';

import HomeIcon from '../assets/svg/house.svg';
import BurgerIcon from '../assets/svg/list.svg';
import {
  Fixed,
  Banner,
  SmallBanner,
  StyledLink,
  NavStyle,
  Navbar,
  NavbarNav,
  NavbarNavItem,
} from '../styles';
import NavCollapse from './NavCollapse';
import useOnClickOutside from '../hooks/useOnClickOutside';

function NavSmall({ children }) {
  return (
    <Navbar>
      <NavbarNav>{children}</NavbarNav>
    </Navbar>
  );
}

function NavItem({ open, setOpen, children, icon, linkref }) {
  const listener = useCallback(() => {
    setOpen(state => !state);
  }, [setOpen]);

  const handleKey = useCallback(
    evt => {
      // keyCode = 9 "tab"
      if (evt.keyCode === 9) {
        setOpen(state => !state);
      }
    },
    [setOpen]
  );

  useEffect(() => {
    const bun = linkref.current;
    bun.addEventListener('click', listener);
    document.addEventListener('keydown', handleKey); // listen for 'tab' key

    return () => {
      bun.removeEventListener('click', listener);
      document.removeEventListener('keydown', handleKey);
    };
  }, [handleKey, linkref, listener]);

  return (
    <NavbarNavItem>
      <div
        className="icon-button"
        ref={linkref}
        onClick={() => listener}
        onKeyDown={handleKey}
        role="button"
        tabIndex={0}>
        {icon}
      </div>
      {open && children}
    </NavbarNavItem>
  );
}

function NavLink({ icon }) {
  return (
    <NavbarNavItem>
      <Link className="icon-button" to="/">
        {icon}
      </Link>
    </NavbarNavItem>
  );
}

const Nav = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const linkref = useRef(open);
  const handler = useCallback(() => setOpen(false), [setOpen]);
  useOnClickOutside(dropdownRef, linkref, handler);

  const { category } = useStaticQuery(graphql`
    query {
      category: allSanityCategory {
        nodes {
          name
          slug {
            current
          }
          _id
        }
      }
    }
  `);

  return (
    <Fixed>
      <MediaQuery minWidth={668}>
        <Banner>Charles Penny</Banner>
        <NavStyle>
          <StyledLink to="/" activeClassName="active">
            Home
          </StyledLink>
          {category.nodes.map(cat => (
            <StyledLink
              to={`/category/${cat.slug.current}`}
              key={cat._id}
              activeClassName="active">
              {cat.name}
            </StyledLink>
          ))}
          <StyledLink to="/contact" key="contact" activeClassName="active">
            Contact
          </StyledLink>
        </NavStyle>
      </MediaQuery>

      <MediaQuery maxWidth={667}>
        <NavSmall>
          <SmallBanner>Charles Penny</SmallBanner>
          <NavLink icon={<HomeIcon />} key="Home" />
          <NavItem
            linkref={linkref}
            icon={<BurgerIcon />}
            key="burger"
            open={open}
            setOpen={setOpen}>
            <NavCollapse
              list={category.nodes}
              dropref={dropdownRef}
              setOpen={setOpen}
            />
          </NavItem>
        </NavSmall>
      </MediaQuery>
    </Fixed>
  );
};

export default Nav;
