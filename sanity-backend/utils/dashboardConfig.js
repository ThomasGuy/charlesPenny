export default {
  widgets: [
    {
      name: 'netlify',
      options: {
        title: 'My Netlify deploys',
        sites: [
          {
            title: 'Sanity Studio',
            apiId: 'ed6a2651-3415-445b-893e-2316f8964a2c',
            buildHookId: 'https://charlespenny.sanity.studio/',
            name: 'charles-penny',
          },
          {
            title: 'Website',
            apiId: 'ed6a2651-3415-445b-893e-2316f8964a2c',
            buildHookId:
              'https://api.netlify.com/build_hooks/604c2053b5051743085b3c90',
            name: 'jovial-perlman-496295',
          },
        ],
      },
    },
  ],
};
