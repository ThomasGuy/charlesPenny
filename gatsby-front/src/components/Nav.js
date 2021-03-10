import React from 'react';

import { graphql, useStaticQuery, Link } from 'gatsby';
import styled from 'styled-components';

const Fixed = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--bg);
  padding-bottom: 10ox;
  max-width: var(--maxWidth);
  margin: 0 auto;
`;

const NavStyle = styled.ul`
  margin: 0;
  padding: 0;
  text-align: center;
  list-style: none;
  display: flex;
  flex-direction: horizontal;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  li {
    min-width: 120px;
    max-width: 220px;
    background: var(--bg_link);
    margin: 5px;
    padding: 0 5px;
    border-radius: 0 0 20px 20px;
    box-shadow: var(--bs);
  }

  a {
    font-size: 1.8rem;
    color: #ededed;
    line-height: 2;
  }
`;

const Nav = () => {
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
      <NavStyle>
        <li>
          <Link to="/">Home</Link>
        </li>
        {category.nodes.map(cat => (
          <li key={cat._id}>
            <Link to={`/category/${cat.slug.current}`}>
              <p>{cat.name}</p>
            </Link>
          </li>
        ))}
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </NavStyle>
    </Fixed>
  );
};

export default Nav;
