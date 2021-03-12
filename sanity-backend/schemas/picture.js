// import client from 'part:@sanity/base/client';
import { AiOutlinePicture as icon } from 'react-icons/ai';

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
      description: 'Choose a Category from the dropdown menu',
      to: [{ type: 'category' }],
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Enter the Picture Title above then click Generate',
      options: {
        source: 'name',
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
  ],
  preview: {
    select: {
      name: 'name',
      category: 'category.name',
      media: 'image',
    },
    prepare({ name, category, media }) {
      return {
        title: `${category} - ${name}`,
        media,
      };
    },
  },
};
