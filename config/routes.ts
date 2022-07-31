export default [
  {
    path: '/user',
    layout: false,
    routes: [
      { name: '登录', path: '/user/login', component: './user/NewLogin' },
      { component: './404' },
    ],
  },
  {
    path: '/home',
    name: '首页',
    icon: 'lineChart',
    // component: './home',
    routes: [
      { path: '/home', component: './home' },
      { path: '/home/detail', component: './home/Detail' },
    ],
  },
  { path: '/order', name: '订单', icon: 'container', component: './order' },
  { path: '/news', name: '新闻', icon: 'codeSandbox', component: './news' },
  { path: '/mine', name: '我的', icon: 'user', component: './mine' },
  // { path: '/welcome', name: '欢迎', icon: 'smile', component: './Welcome' },
  { path: '/', redirect: '/home' },
  // { path: '/template', name: '', icon: 'userOut', component: './TemmlatePage' },
  { path: '/detail', layout: false, component: './detail' },
  { component: './404' },
];
