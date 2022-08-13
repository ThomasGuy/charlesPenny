import React, { useCallback, useEffect, useRef, useState } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
// import PropTypes from 'prop-types';
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
import { useBreakpoint } from '../hooks/useBreakpoint';
import { useTitleContext } from '../hooks/TitleContext';

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
    [setOpen],
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
        aria-label="menu"
        role="menu"
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
      <Link className="icon-button" aria-label="Link homepage" to="/">
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
  const mql = useBreakpoint();
  const { title } = useTitleContext();

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

  // console.log('navchange', mql.navChange);

  return (
    <Fixed>
      {mql.navChange ? (
        <>
          <Banner>{title}</Banner>
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
        </>
      ) : (
        <NavSmall>
          <SmallBanner>{title}</SmallBanner>
          <NavLink icon={<HomeIcon />} aria-label="Home page" key="Home" />
          <NavItem
            linkref={linkref}
            aria-label="menu"
            aria-expanded="false"
            tab-index={0}
            icon={<BurgerIcon />}
            key="burger"
            open={open}
            setOpen={setOpen}>
            <NavCollapse
              aria-expanded="true"
              list={category.nodes}
              dropref={dropdownRef}
              setOpen={setOpen}
            />
          </NavItem>
        </NavSmall>
      )}
    </Fixed>
  );
};

export default Nav;

// NavItem.propTypes = {
//   open: PropTypes.bool,
//   setOpen: PropTypes.func,
//   children: PropTypes.node,
//   icon: PropTypes.element,
// };

// NavLink.propTypes = {
//   icon: PropTypes.element,
// };

// NavSmall.propTypes = {
//   children: PropTypes.node,
// };
