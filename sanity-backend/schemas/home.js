import { RiHome2Line as icon } from 'react-icons/ri';

export default {
  // Computer name
  name: 'home',
  //  visible name
  title: 'Home Page',
  icon,
  type: 'document',
  // This will remove the hOME document type from the create-menus.
  __experimental_actions: ['update', 'publish' /* 'create', 'delete' */],
  fields: [
    {
      name: 'name',
      title: 'Home Page',
      type: 'string',
      // readOnly: true,
      validation: Rule => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Home page image',
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
      title: 'Events and Exhibtions',
      name: 'events',
      description: 'Add or remove each event individually',
      validation: Rule => Rule.required(),
      type: 'array',
      of: [{ type: 'event' }],
    },
  ],
};
