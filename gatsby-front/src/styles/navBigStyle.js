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
  box-shadow: var(--bs);
  line-height: 2;
  font-size: 1.8rem;

  & :hover {
    background-color: var(--link_hover);
  }

  &.active {
    background-color: var(--link_hover);
  }
`;

export const Banner = styled.h1`
  flex: 1;
  text-align: center;
  margin: 0;
  padding: 1.5rem;
  background-color: var(--link_bg);
`;
