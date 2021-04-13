import { BiPalette as icon } from 'react-icons/bi';
import slugify from 'slugify';

export default {
  // Computer name
  name: 'category',
  title: 'Category',
  icon,
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Catagory',
      type: 'string',
      description: 'Enter the Category Title',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Enter Category title above then click Generate',
      options: {
        source: doc => `${slugify(doc.name)}`,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'border',
      title: 'Images have a Boarder?',
      type: 'boolean',
      description:
        'Switch on for images in this category to have a boarder, otherwise switch off...',
      validation: Rule => Rule.required(),
    },
  ],
};
