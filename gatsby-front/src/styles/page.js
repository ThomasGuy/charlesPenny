import styled from 'styled-components';
import { mediaQuery } from './mediaQuery';

export const Page = styled.div`
  margin: 0 auto;
  margin-top: 8rem;
  max-width: 100rem;
  padding: 0 0.8rem;

  ${mediaQuery('md')`
    margin-top: 18rem;
  `};
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  #cert {
    font-size: 0.8rem;
    font-weight: 400;
  }

  @media screen and (min-width: 368px) {
    font-size: 1.5rem;
    font-weight: 600;
  }
  @media screen and (min-width: 568px) {
    font-size: 1.9rem;
    #cert {
      font-size: 1rem;
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 2.5rem;
    font-weight: 900;
  }
`;

export const Row = styled.div`
  margin-top: 1rem;
  display: flex;

  & > * {
    flex: 0 1 100%;

    &:not(:first-child) {
      margin-left: 2rem;
    }
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  #comment {
    font-size: 1.8rem;
  }

  .bottom {
    margin-top: auto;
  }

  a {
    text-decoration: none;
    color: var(--offwhite);
  }

  ul {
    list-style-type: none;
    font-size: 2rem;
    li {
      padding: 8px;
      margin-bottom: 7px;
      color: var(--offWhite);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      &:hover {
        background-color: var(--link_bg);
      }
    }
    #social {
      margin-right: 2rem;
    }
  }
`;

export const UpComing = styled.h2`
  width: 90%;
  text-align: center;
  background: var(--black);
  color: var(--yellow);
  margin: 0 auto;
  margin-top: 4rem;
  opacity: 0.9;
  font-size: 1.8rem;

  ${mediaQuery('xs')`
    font-size: 2.3rem;
  `};

  ${mediaQuery('sm')`
    font-size: 2.8rem;
    `};

  ${mediaQuery('md')`
    font-size: 3.2rem;
    width: 80%;
  `};
`;

export const Bio = styled.p`
  text-align: center;
  font-size: 1.5rem;
  line-height: 1.4;
  padding: 0 0.5rem;

  @media screen and (min-width: 480px) {
    font-size: 2rem;
    line-height: 1.5;
    padding: 0 1rem;
  }
`;

export const Image = styled.div`
  max-width: ${props => props.width};
  height: auto;
`;
