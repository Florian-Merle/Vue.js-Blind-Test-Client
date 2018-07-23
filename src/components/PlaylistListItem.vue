<template>
  <router-link class="playlist-item" :to="{ path: '/' }">
    <div>
      <div class="playlist uk-card uk-card-default uk-card-hover uk-card-body">
        <h3 class="uk-card-title">{{ playlist.name }}</h3>
        <p>{{ playlist.genre }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ['playlist'],
};
</script>

<style scoped>
a.playlist-item {
  text-decoration: none;
}
</style>
