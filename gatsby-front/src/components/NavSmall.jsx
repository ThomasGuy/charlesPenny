import { Link } from 'gatsby';
import React, { useCallback, useEffect } from 'react';
import { Navbar, NavbarNav, NavbarNavItem } from '../styles';

export function NavSmall({ children }) {
  return (
    <Navbar>
      <NavbarNav>{children}</NavbarNav>
    </Navbar>
  );
}

export function NavItem({ open, setOpen, children, icon, linkref }) {
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
    if (linkref && linkref.current) {
      const bun = linkref.current;
      bun.addEventListener('click', listener);
      document.addEventListener('keydown', handleKey);

      return () => {
        bun.removeEventListener('click', listener);
        document.removeEventListener('keydown', handleKey);
      };
    }
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

export function NavLink({ icon }) {
  return (
    <NavbarNavItem>
      <Link className="icon-button" to="/">
        {icon}
      </Link>
    </NavbarNavItem>
  );
}
