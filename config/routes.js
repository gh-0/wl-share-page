export default [
  {
    path: '/',
    component: '../layouts',
    routes: [
      { path: '/city/:id', component: './City' },
      {
        path: '/question/:id',
        component: './Question',
      },
    ],
  },
];
