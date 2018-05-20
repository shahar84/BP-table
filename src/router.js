import Vue from 'vue';
import Router from 'vue-router';
import DBP from './views/DBP.vue';
import SBP from './views/SBP.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'sbp',
      component: SBP,
    },
    {
      path: '/sbp',
      name: 'sbp',
      component: SBP,
    },
    {
      path: '/dbp',
      name: 'dbp',
      component: DBP,
    },
  ],
});
