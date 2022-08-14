import styled from 'styled-components';
import { mediaQuery } from './mediaQuery';

export const Page = styled.div`
  margin: 0 auto;
  margin-top: 8rem;
  max-width: 100rem;
  padding: 0 0.8rem;

  ${mediaQuery('navChange')`
    margin-top: 18rem;
  `};
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

  ${mediaQuery('sm')`
    font-size: 2rem;
    line-height: 1.5;
    padding: 0 1rem;
  `};
`;
