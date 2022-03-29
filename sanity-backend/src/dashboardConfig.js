export default {
  widgets: [
    {
      name: 'netlify',
      title: 'Charles Penny Netify deploys',
      options: {
        sites: [
          {
            title: 'Sanity Studio',
            apiId: 'cb2e657e-9e6d-4944-b3c0-dada2be54740',
            buildHookId: 'https://api.netlify.com/build_hooks/6237497405f6a751553c8de7',
            name: 'charles-penny-sanity-studio',
          },
          {
            title: 'Website',
            apiId: '926bac00-69f9-4580-a94a-baee09204bde',
            buildHookId: 'https://api.netlify.com/build_hooks/623748e9e420996f63b7b89b',
            name: 'charles-penny-gallery',
            // url: 'https://my-sanity-deployment.com',
          }
        ],
      },
    },
  ],
};
