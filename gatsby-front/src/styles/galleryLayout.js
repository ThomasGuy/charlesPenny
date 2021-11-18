import styled from 'styled-components';
import { mediaQuery } from './mediaQuery';

export const GalleryLayout = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 12rem;
  gap: 2rem;

  ${mediaQuery('sm')`
  grid-template-columns: 1fr 1fr;
  row-gap: 3rem;
  column-gap: 2rem;
`};

  ${mediaQuery('md')`
  grid-template-columns: 1fr 1fr 1fr;
`};

  ${mediaQuery('navChange')`
  margin-top: 18rem;
`};

  ${mediaQuery('lg')`
  grid-template-columns: 1fr 1fr 1fr 1fr;
`};
`;
