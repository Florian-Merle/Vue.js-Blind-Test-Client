<template>
  <div>
    <h1>Add a playlist</h1>
    <playlist-form @playlistPublished="savePlaylist"></playlist-form>
  </div>
</template>

<script>
import gql from 'graphql-tag';
import PlaylistForm from '@/components/PlaylistForm';

export default {
  name: 'AddPlaylist',
  data() {
    return {
    };
  },
  components: {
    playlistForm: PlaylistForm,
  },
  methods: {
    async savePlaylist(playlist) {
      await this.$apollo.mutate({
        mutation: gql`
          mutation($name: String, $genre: String) {
            addPlaylist(name: $name, genre: $genre) {
              id
            }
          }
        `,
        variables: {
          name: playlist.title,
          genre: playlist.genre,
        },
      });

      // TODO: redirect to edit page
    },
  },
};
</script>

<style>
</style>
