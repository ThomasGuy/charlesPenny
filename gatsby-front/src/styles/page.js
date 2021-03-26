import styled from 'styled-components';
import { mediaQueries } from './mediaQueries';

export const Page = styled.div`
  margin: 0 auto;
  margin-top: 8rem;
  max-width: 100rem;
  padding: 0 0.8rem;

  ${mediaQueries('md')`
    margin-top: 18rem;
  `};
`;
