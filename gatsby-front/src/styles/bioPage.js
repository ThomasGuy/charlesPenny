import styled from 'styled-components';
import { mediaQuery } from './mediaQuery';

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

  ${mediaQuery('xs')`
    font-size: 1.5rem;
    font-weight: 600;
  `};

  ${mediaQuery('sm')`
    font-size: 1.9rem;
    #cert {
      font-size: 1rem;
    }
  `};

  ${mediaQuery('md')`
    font-size: 2.5rem;
    font-weight: 900;
  `};
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
      margin: 1rem;
    }
  }
`;

export const Image = styled.div`
  max-width: ${props => props.width};
  height: auto;
`;
