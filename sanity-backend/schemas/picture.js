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
      to: [{ type: 'category' }],
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: Rule => Rule.required(),
      // options: {
      //   source: async doc => {
      //     if (!doc.catagory) {
      //       return doc.title;
      //     }
      //     const category = await client.getDocument(doc.category._ref);
      //     // const name = await client.getDocument(doc.name._ref);
      //     return `${category.name}-by-${doc.name}`;
      //   },
      //   maxLength: 150,
      // },
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
