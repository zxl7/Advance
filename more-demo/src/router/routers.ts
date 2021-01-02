let routers = [
  {
    path: '/',
    name: 'home',
    title: '主页',
    component: () => import(/* webpackChunkName: "home" */ '../views/home.vue'),
  },
  {
    path: '/components/',
    name: 'components',
    title: '组件',
    component: () => import(/* webpackChunkName: "calendar" */ '../components/index.vue'),
  },
  {
    path: '/css3/round',
    name: 'round',
    title: '圆',
    component: () => import(/* webpackChunkName: "round" */ '../views/css3/round.vue'),
  },
]

export default routers
