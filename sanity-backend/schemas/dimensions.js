import { BiRuler as icon } from 'react-icons/bi';

export default {
  // Computer name
  name: 'dimensions',
  title: 'Dimensions',
  icon,
  type: 'object',
  fields: [
    {
      name: 'width',
      title: 'Width',
      type: 'number',
      validation: Rule => Rule.required(),
    },
    {
      name: 'height',
      title: 'Height',
      type: 'number',
      validation: Rule => Rule.required(),
    },
  ],
};
