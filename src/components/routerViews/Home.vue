<template>
  <div class="home">
    <h1>Choose a playlist</h1>


    <div class="uk-margin">
      <select class="uk-select" v-model="selectedGenre">
        <option value="*">Everything</option>
        <option v-for="genre in genres" v-bind:key="genre">{{ genre }}</option>
     </select>
    </div>

    <div class="playlists uk-child-width-1-2@s uk-grid-match" uk-grid>
      <list-item
        v-for="playlist in filteredPlaylists"
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
      selectedGenre: '*',
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
  computed: {
    genres() {
      // get every genres once and not empty
      return [...new Set(this.playlists.map(playlist => playlist.genre))]
        .filter(genre => genre);
    },
    filteredPlaylists() {
      if (this.selectedGenre === '*') {
        return this.playlists;
      }

      return this.playlists.filter(playlist => this.selectedGenre === playlist.genre);
    },
  },
};
</script>

<style>
</style>
