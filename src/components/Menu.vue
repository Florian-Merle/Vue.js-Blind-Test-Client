<template>
  <div class="menu">
    <router-link :to="{ path: '/' }">Home</router-link>
    <router-link :to="{ path: '/playlist/add' }">Add a playlist</router-link>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.menu {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 30px;

  line-height: 30px;
  margin: 0;
  padding: 10px;

  background-color: #666;
  box-shadow: 0 5px 10px #aaa;
}

.menu a {
  color: #fff;
  text-decoration: none;
}

.menu a.router-link-exact-active {
  text-decoration: underline;
}
</style>
