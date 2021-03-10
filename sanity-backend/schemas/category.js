import { BiPalette as icon } from 'react-icons/bi';
import slugify from 'slugify';

export default {
  // Computer name
  name: 'category',
  //  visible name
  title: 'Category',
  icon,
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Catagory',
      type: 'string',
      description: 'An picture category',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: doc => `${slugify(doc.name)}`,
      },
      validation: Rule => Rule.required(),
    },
  ],
};
