import styled from 'styled-components';

// Nav styles
export const Navbar = styled.nav`
  height: var(--nav-size);
  background-color: var(--black);
  padding: 0 0.5rem;
  border-bottom: var(--border);
`;

export const NavbarNav = styled.ul`
  max-width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const NavbarNavItem = styled.li`
  width: calc(var(--nav-size) * 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0;

  /* Icon Button */
  .icon-button {
    --button-size: calc(var(--nav-size) * 0.6);
    width: var(--button-size);
    height: var(--button-size);
    background-color: #484a4d;
    border-radius: 50%;
    padding: 5px;
    margin: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: filter 300ms;
    outline: none;
  }

  .icon-button:hover {
    filter: brightness(1.3);
  }

  svg {
    fill: var(--offWhite) !important;
    width: 25px;
    height: 25px;
  }
`;
