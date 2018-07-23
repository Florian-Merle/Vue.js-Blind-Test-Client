<template>
  <nav class="uk-navbar-container" uk-navbar>
      <div class="uk-navbar-left">
          <ul class="uk-navbar-nav">
              <li class="">
                <router-link :to="{ path: '/' }">Home</router-link>
              </li>
              <li class="">
                <router-link :to="{ path: '/playlist/add' }">Add a playlist</router-link>
              </li>
          </ul>
      </div>
  </nav>
</template>

<script>
export default {

};
</script>

<style scoped>
</style>
