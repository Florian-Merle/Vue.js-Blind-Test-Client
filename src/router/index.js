import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/routerViews/Home';
import AddPlaylist from '@/components/routerViews/AddPlaylist';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/playlist/add',
      name: 'AddPlaylist',
      component: AddPlaylist,
    },
  ],
});
