import { AiOutlineEnvironment as icon } from 'react-icons/ai';

export default {
  // Computer name
  name: 'address',
  title: 'Address',
  icon,
  type: 'object',
  fields: [
    {
      name: 'number',
      title: 'number/name',
      type: 'string',
      description: 'address number/name',
    },
    {
      name: 'road',
      title: 'Road',
      type: 'string',
    },
    {
      name: 'city',
      title: 'Town/City',
      type: 'string',
    },
    {
      name: 'postcode',
      title: 'Postcode',
      type: 'string',
    },
    {
      name: 'country',
      title: 'Country',
      type: 'string',
    },
  ],
};
