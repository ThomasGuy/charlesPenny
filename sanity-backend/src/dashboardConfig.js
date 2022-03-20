export default {
  widgets: [
    {
      name: 'netlify',
      title: 'Charles Penny Netify deploys',
      options: {
        sites: [
          // {
          //   title: 'Sanity Studio',
          //   apiId: 'xxxxx-yyyy-zzzz-xxxx-yyyyyyyy',
          //   buildHookId: 'xxxyyyxxxyyyyxxxyyy',
          //   name: 'sanity-gatsby-blog-20-studio',
          // },
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
