export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e7b98ed873437021064499b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-j6rrvy3w',
                  apiId: '8d73129a-9757-4f26-90e4-acb96928f92b'
                },
                {
                  buildHookId: '5e7b98ed8fa11102118f8737',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-hk1377eq',
                  apiId: '1eed6841-fc9a-48dd-9cd4-99c7fee665a0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/chriskivaze/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-hk1377eq.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
