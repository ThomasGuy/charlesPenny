import { FaRegEnvelope as icon } from 'react-icons/fa';

export default {
  name: 'contact',
  title: 'Contact Page',
  icon,
  type: 'document',
  // This will remove the hOME document type from the create-menus.
  __experimental_actions: ['update', 'publish' /* 'create', 'delete' */],
  fields: [
    {
      name: 'name',
      title: 'Contact Page title',
      type: 'string',
      // readOnly: true,
      validation: Rule => Rule.required(),
    },
    {
      name: 'email',
      title: 'email',
      type: 'string',
    },
    {
      name: 'mug',
      title: 'Mug Shot',
      type: 'image',
      decription: 'Artists Photo',
      validation: Rule => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Contact page image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
    },
    {
      title: 'About me',
      name: 'biography',
      description: 'Enter Biography paragraph by paragraph',
      validation: Rule => Rule.required(),
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'links',
      title: 'Website Links',
      type: 'array',
      of: [{ type: 'link' }],
    },
    {
      title: 'Social Media',
      name: 'social',
      type: 'social',
    },
  ],
};
