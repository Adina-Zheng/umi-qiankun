
// ref: https://umijs.org/config/
export default {
  routes: [
    // { path: '/', redirect: '/register' },
    { path: '/home', component: './Register' }
  ],
  qiankun: {
    slave: {},
  },
}
