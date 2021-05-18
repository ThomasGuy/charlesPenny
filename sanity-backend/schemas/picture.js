// import client from 'part:@sanity/base/client';
import { AiOutlinePicture as icon } from 'react-icons/ai';
import slugify from 'slugify';
// eslint-disable-next-line import/no-unresolved
import sanityClient from 'part:@sanity/base/client';

const client = sanityClient.withConfig({
  apiVersion: '2021-04-01',
});

export default {
  name: 'picture',
  title: 'Picture',
  icon,
  type: 'document',

  fields: [
    {
      name: 'name',
      title: 'Picture Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      description: 'Choose a Category from the dropdown menu',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description:
        'Enter the Picture Title and Category above then click Generate',
      options: {
        source: async doc => {
          const cat = await client.getDocument(doc.category._ref);
          return `${slugify(doc.name)}-in-${slugify(cat.name)}`;
        },
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'dimensions',
      title: 'Image dimensions',
      type: 'dimensions',
      description: 'add picture dimensions',
    },
  ],
  orderings: [
    {
      title: 'Category',
      name: 'category',
      by: [{ field: 'category.name', direction: 'desc' }],
    },
    {
      title: 'Name',
      name: 'name',
      by: [{ field: 'name', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      name: 'name',
      category: 'category.name',
      media: 'image',
    },
    prepare({ name, category, media }) {
      return {
        title: `${name} - ${category}`,
        media,
      };
    },
  },
};
