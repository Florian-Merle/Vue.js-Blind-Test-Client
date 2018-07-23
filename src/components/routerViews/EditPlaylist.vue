<template>
  <div>
    <h1>Edit a playlist</h1>
    <playlist-form v-bind:playlistData="playlist" @playlistPublished="savePlaylist"></playlist-form>
  </div>
</template>

<script>
import gql from 'graphql-tag';
import PlaylistForm from '@/components/PlaylistForm';

export default {
  name: 'EditPlaylist',
  data() {
    return {
      playlist: {},
    };
  },
  components: {
    playlistForm: PlaylistForm,
  },
  methods: {
    async savePlaylist(playlist) {
      await this.$apollo.mutate({
        mutation: gql`
          mutation($id: ID, $name: String, $genre: String) {
            updatePlaylist(id: $id, name: $name, genre: $genre) {
              id
            }
          }
        `,
        variables: {
          id: this.playlist.id,
          name: playlist.title,
          genre: playlist.genre,
        },
      });

      this.$eventBus.$emit('flash', {
        type: 'success',
        message: 'Playlist updated',
      });
    },
  },
  async created() {
    const result = await this.$apollo.query({
      query: gql`
        query($id: ID) {
          playlist(id: $id) {
            name
            genre
          }
        }
      `,
      variables: {
        id: this.$route.params.id,
      },
    });

    this.playlist = {
      id: this.$route.params.id,
      title: result.data.playlist.name,
      genre: result.data.playlist.genre,
    };
  },
};
</script>

<style>
</style>
