<template>
  <div class="home">
    <h1>Hi</h1>
  </div>
</template>

<script>
import gql from 'graphql-tag';

export default {
  name: 'Home',
  data() {
    return {
      playlists: [],
    };
  },
  apollo: {
    playlists: gql`
      query {
        playlists {
          id
          name
          genre
        }
      }`,
  },
};
</script>

<style>
</style>
