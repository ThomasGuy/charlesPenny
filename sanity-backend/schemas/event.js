import { MdEventSeat as icon } from 'react-icons/md';

export default {
  // Computer name
  name: 'event',
  title: 'Event',
  icon,
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Event name',
      type: 'string',
      description: 'Links visible name',
      validation: Rule => Rule.required(),
    },
    {
      name: 'dates',
      title: 'Dates',
      type: 'dates',
      decription: 'Enter dates (optional)',
    },
    {
      name: 'about',
      title: 'About event',
      type: 'string',
      description: 'Enter a short description of the event',
    },
    {
      name: 'address',
      title: 'Event address',
      type: 'address',
      descripotion: 'Add event address here',
    },
  ],
};
