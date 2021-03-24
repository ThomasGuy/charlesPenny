import { CgCalendarDates as icon } from 'react-icons/cg';

export default {
  // Computer name
  name: 'dates',
  //  visible name
  title: 'Dates',
  icon,
  type: 'object',
  fields: [
    {
      name: 'start',
      title: 'Start date',
      type: 'date',
      description: 'Event start date',
    },
    {
      name: 'finish',
      title: 'Finish date',
      type: 'date',
      description: 'Event end date',
    },
  ],
};
