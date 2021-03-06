import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/routerViews/Home';
import AddPlaylist from '@/components/routerViews/AddPlaylist';
import EditPlaylist from '@/components/routerViews/EditPlaylist';
import ViewPlaylist from '@/components/routerViews/ViewPlaylist';
import AddMusic from '@/components/routerViews/AddMusic';
import EditMusic from '@/components/routerViews/EditMusic';
import Game from '@/components/routerViews/Game';

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
    {
      path: '/playlist/edit/:id',
      name: 'EditPlaylist',
      component: EditPlaylist,
    },
    {
      path: '/playlist/:id',
      name: 'ViewPlaylist',
      component: ViewPlaylist,
    },
    {
      path: '/music/add/:playlistId',
      name: 'AddMusic',
      component: AddMusic,
    },
    {
      path: '/music/edit/:playlistId/:id',
      name: 'EditMusic',
      component: EditMusic,
    },
    {
      path: '/playlist/play/:id',
      name: 'Game',
      component: Game,
    },
  ],
});
