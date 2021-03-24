import { Link } from 'gatsby';
import styled from 'styled-components';

export const Fixed = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  max-width: var(--maxWidth);
  margin: 0 auto;
`;

export const NavStyle = styled.div`
  text-align: center;
  display: flex;
  flex-direction: horizontal;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 1rem;
`;

export const StyledLink = styled(Link)`
  min-width: 120px;
  background: var(--link_bg);
  /* border-radius: 0 0 20px 20px; */
  box-shadow: var(--bs);
  color: var(--offWhite);
  line-height: 2;
  font-size: 1.8rem;

  & :hover {
    background-color: var(--link_hover);
  }

  .active {
    background: var(--link_hover);
  }
`;

export const Banner = styled.h1`
  flex: 1;
  width: 100%;
  color: var(--offWhite);
  text-align: center;
  margin: 0;
  padding: 1.5rem;
  /* margin-bottom: 1rem; */
  /* border-bottom: 1px solid rgb(41, 39, 39); */
  /* box-shadow: 0 5px 5px 1px rgb(41, 39, 39, 0.95); */
  background-color: var(--link_bg);
`;
