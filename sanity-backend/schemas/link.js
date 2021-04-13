import { BsLink45Deg as icon } from 'react-icons/bi';

export default {
  // Computer name
  name: 'link',
  title: 'Link',
  icon,
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'link name',
      type: 'string',
      description: 'Links visible name',
      validation: Rule => Rule.required(),
    },
    {
      name: 'href',
      title: 'url',
      type: 'url',
      decription: 'Link URL',
      validation: Rule => Rule.required().min(1),
    },
  ],
};
