import React from 'react';
import styled from 'styled-components';
import CalendarIcon from '../assets/svg/calendar3.svg';

const Container = styled.div`
  background-color: var(--link_bg);
  width: 90%;
  height: 30rem;
  margin: 0 auto 4rem auto;
  overflow-y: auto;
  scrollbar-width: none;

  @media screen and (max-width: 480px) {
    font-size: 1.8rem;
  }

  @media screen and (min-width: 676px) {
    width: 80%;
  }
`;

const EventList = styled.ul`
  p {
    margin: 0;
  }
  h3,
  h4 {
    margin-bottom: 0;
  }
`;

const Title = styled.div`
  position: absolute;
  top: -3px;
  left: 3rem;
  transform: rotate(-2deg);
  display: inline-block;
  background-color: var(--yellow);
  color: var(--black);
  font-size: 2.2rem;
  font-weight: 900;
  line-height: 2;
  padding: 0 1rem;
  z-index: 1;

  @media screen and (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

const EventListItem = styled.li`
  position: relative;
  background: var(--black);
  opacity: 0.9;
  padding: 0 1rem;
  padding-top: 3rem;
  margin-top: 1rem;

  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
    padding-top: 2rem;
  }
`;

export function Event({ evt }) {
  const { name, address, dates, about, _key } = evt;
  const { number, road, city, postcode, country } = address;
  return (
    <EventListItem>
      <Title>{name}</Title>
      <h4>
        <CalendarIcon /> &nbsp; {dates.start} &nbsp;&#8209;&nbsp; {dates.finish}
      </h4>
      <p>{about}</p>
      <p>{`${number} ${road}, ${city}, ${postcode}, ${country}`}</p>
    </EventListItem>
  );
}

export default function Events({ events }) {
  const evtList = events.map(evt => <Event evt={evt} key={evt._key} />);
  return (
    <Container>
      <EventList>{evtList}</EventList>
    </Container>
  );
}
