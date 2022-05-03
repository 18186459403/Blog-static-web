export default [
  { path: '/', redirect: '/login' },
  {
    path: '/login',
    component: '@/pages/Login',
  },
  {
    path: '/blog',
    component: '@/layouts',
    routes: [
      {
        path: '/blog/atricle',
        component: '@/pages/Atricle',
      },
      {
        path: '/blog/atricle/list',
        component: '@/pages/AtricleList',
      },
      {
        path: '/blog/home',
        component: '@/pages/Home',
      },
      {
        path: '/blog/user',
        component: '@/pages/User',
      },
    ],
  },
];
