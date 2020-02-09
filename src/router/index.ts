import Vue from 'vue';
import Router from 'vue-router';
import Result from '../components/Result.vue';

Vue.use(Router);

export default new Router({
  // mode: 'history',
  base: process.env.NODE_ENV === 'production'
    ? `/${process.env.VUE_APP_PUBLIC_PATH}/`
    : '/',
  routes: [
    {
      path: '/:id',
      name: 'Result',
      component: Result,
    },
  ],
});
