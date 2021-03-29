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
