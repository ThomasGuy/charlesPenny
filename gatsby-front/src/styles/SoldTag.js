import styled from 'styled-components';

export const SoldTag = styled.span`
  position: absolute;
  background: var(--red);
  box-shadow: 1px 3px 2px var(--grey);
  transform: rotate(7deg);
  color: var(--text-color);
  font-weight: 600;
  display: inline-block;
  padding: 5px 8px;
  line-height: 0.9;
  font-size: 2.2rem;
  top: -3px;
  right: -3px;
`;

export const SoldTagModal = styled.span`
  position: absolute;
  background: var(--red);
  box-shadow: 1px 3px 2px var(--grey);
  transform: rotate(8deg);
  color: var(--offwhite);
  font-weight: 600;
  display: inline-block;
  padding: 5px 8px;
  top: 58px;
  right: 15px;
  font-size: 2.5rem;
  line-height: 1;

  @media screen and (min-width: 568px) {
    box-shadow: 1px 4px 2px var(--grey);
    padding: 5px 10px;
    font-size: 3rem;
  }
`;
