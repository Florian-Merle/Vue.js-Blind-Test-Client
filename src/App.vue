<template>
  <div id="app">
    <app-menu></app-menu>
    <div class="coll">
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
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
}

.coll {
  background-color: #ccc;
  margin: 50px auto;
  padding: 10px;
  width: 960px;

}
</style>
