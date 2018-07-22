<template>
  <div class="home">
    <h1>Choose a playlist</h1>
    <div class="playlists">
      <list-item
        v-for="playlist in playlists"
        :key="playlist.id"
        v-bind:playlist="playlist">
      </list-item>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag';
import PlaylistListItem from '@/components/PlaylistListItem';

export default {
  name: 'Home',
  components: {
    ListItem: PlaylistListItem,
  },
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
