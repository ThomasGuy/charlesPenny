import React from 'react';
import styled from 'styled-components';

const FootStyle = styled.footer`
  margin-top: auto;
  font-size: 1.6rem;
  text-align: center;

  & > a {
    color: var(--title);
    text-decoration: none;
  }
`;

const Footer = () => (
  <FootStyle>
    <a href="mailto:twguy.webdev@gmail.com">TWGuy Web Development</a>
  </FootStyle>
);

export default Footer;
