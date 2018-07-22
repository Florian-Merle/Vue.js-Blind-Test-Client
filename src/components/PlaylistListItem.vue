<template>
  <router-link :to="{ path: '/' }">
    <div class="playlist">
      <h2>{{ playlist.name }}</h2>
      <p>{{ playlist.genre }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ['playlist'],
};
</script>

<style scoped>
.playlist {
  box-sizing: border-box;
  width: 50%;
  float: left;
  padding: 10px;
  border: 1px solid #aaa;
  background-color: #bbb;
}

a .playlist {
  color: #000;
}
</style>
