export default [
  { path: '/', redirect: '/download' },
  {
    path: '/share/',
    component: '../layouts',
    routes: [
      { path: '/share/city/:id', component: './City' },
      {
        path: '/share/question/:id',
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
