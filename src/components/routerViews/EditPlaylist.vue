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
    // TODO: remove next line
    // eslint-disable-next-line
    async savePlaylist(playlist) {
      // TODO: update playlist
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
      title: result.data.playlist.name,
      genre: result.data.playlist.genre,
    };
  },
};
</script>

<style>
</style>
