export default [
  { path: '/', redirect: '/download' },

  // share
  {
    path: '/share/',
    component: '../layouts',
    routes: [
      { path: '/share/city/:id', component: './City' },
      {
        path: '/share/question/:id',
        component: './Question',
      }, {
        path: '/share/delete',
        component: './Delete',
      },
    ],
  },

  // preview
  {
    path: '/preview/',
    component: '../layouts/BaseLayout',
    routes: [{
      path: '/preview/city/:id',
      component: './City'
    },
    {
      path: '/preview/question/:id',
      component: './Question',
    },
    ],
  },

  {
    path: '/download',
    component: './Download',
  },
  {
    path: '/wechat',
    component: './Wechat',
  },
  {
    path: '/delete',
    component: './Delete',
  },
];
