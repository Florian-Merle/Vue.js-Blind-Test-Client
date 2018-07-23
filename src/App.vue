<template>
  <div id="app">
    <app-menu></app-menu>
    <div id="content" class="uk-container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Menu from '@/components/Menu';

export default {
  name: 'App',
  components: {
    'app-menu': Menu,
  },
};
</script>

<style>
#content {
  margin-top: 10px;
  margin-bottom: 20px;
}
</style>
