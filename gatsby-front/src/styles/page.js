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

    /* &:not(:first-child) {
      margin-left: 2rem;
    } */
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
    margin-right: auto;
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
