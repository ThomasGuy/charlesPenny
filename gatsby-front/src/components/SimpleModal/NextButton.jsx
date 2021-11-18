import React from 'react';
import styled from 'styled-components';
import LeftArrow from '../icons/svg/arrow_double_left.svg';
import RightArrow from '../icons/svg/arrow_double_right.svg';

const NextButton = styled.div`
  .pos-left {
    position: absolute;
    top: 400px;
    left: 20px;
  }

  .pos-right {
    position: absolute;
    top: 400px;
    right: 20px;
  }

  .icon-button {
    z-index: 5;
    width: 3.8rem;
    height: 3.8rem;
    border-radius: 50%;
    padding: 0rem;
    margin: 0 2rem;
    opacity: 0.7;
    transition: filter 300ms;
    outline: none;
    border: none;
    cursor: pointer;
    background-color: #000;

    svg {
      fill: var(--offWhite);
      width: 30px;
      height: 30px;
    }

    &:hover {
      filter: brightness(1.3);
    }
  }
`;

const Next = ({ left, slider }) => {
  let position = 'pos-right';
  if (left) {
    position = 'pos-left';
  }

  return (
    <NextButton>
      <button className={`icon-button ${position}`} type="button" onClick={slider}>
        {left ? <LeftArrow /> : <RightArrow />}
      </button>
    </NextButton>
  );
};

export default Next;
