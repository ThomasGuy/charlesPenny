import styled from 'styled-components';
import { mediaQuery } from '../../styles/mediaQuery';

export const Button = styled.button`
  position: absolute;
  z-index: 1;
  top: 4px;
  right: 4px;

  --button-size: calc(var(--nav-size) * 0.5);
  width: var(--button-size);
  height: var(--button-size);
  background-color: var(--black);
  color: var(--offWhite);
  border: none;
  border-radius: 50%;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  transition: filter 300ms;
  outline: none;

  &:hover {
    filter: brightness(1.4);
  }

  svg {
    fill: var(--white);
    width: 25px;
    height: 25px;
  }
`;

export const ModalWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 200;
  opacity: 1;
  background-color: #1a1a1a;
`;

export const ModalBox = styled.div`
  width: 100%;
  background-color: #1a1a1a;
  padding: 1rem;
  overflow-y: auto;

  ${mediaQuery('md')`
    width: 600px;
  `};
`;
