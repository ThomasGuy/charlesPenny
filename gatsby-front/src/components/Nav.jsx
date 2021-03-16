import React, { useRef, useState } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';

import HomeIcon from '../assets/svg/house.svg';
import BurgerIcon from '../assets/svg/list.svg';
import { NavSmall, NavItem, NavLink } from './NavSmall';
import NavCollapse from '../hooks/NavCollapse';
import useOnClickOutside from '../hooks/useOnClickOutside';

const Fixed = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--bg);
  max-width: var(--maxWidth);
  margin: 0 auto;
`;

const NavStyle = styled.div`
  text-align: center;
  display: flex;
  flex-direction: horizontal;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const StyledLink = styled(Link)`
  min-width: 120px;
  background: var(--bg_link);
  border-radius: 0 0 20px 20px;
  box-shadow: var(--bs);
  color: var(--offWhite);
  line-height: 2;
  font-size: 1.8rem;

  & :hover {
    background-color: var(--link_hover);
    color: var(--yellow);
  }
`;

const Banner = styled.h1`
  flex: 1;
  width: 100%;
  color: var(--offWhite);
  text-align: center;
  margin: 0;
  padding: 1.5rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgb(41, 39, 39);
  box-shadow: 0 5px 5px 1px rgb(41, 39, 39, 0.95);
  background-color: var(--black);
`;

const SmallBanner = styled.h2`
  color: var(--offWhite);
  font-size: 2.4rem;
  margin: 0 auto 0 2rem;
`;

const Nav = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const linkref = useRef(open);
  useOnClickOutside(dropdownRef, () => setOpen(false));

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
          <StyledLink to="/">Home</StyledLink>
          {category.nodes.map(cat => (
            <StyledLink to={`/category/${cat.slug.current}`} key={cat._id}>
              {cat.name}
            </StyledLink>
          ))}
          <StyledLink to="/contact" key="contact">
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
            <NavCollapse list={category.nodes} dropref={dropdownRef} />
          </NavItem>
        </NavSmall>
      </MediaQuery>
    </Fixed>
  );
};

export default Nav;
