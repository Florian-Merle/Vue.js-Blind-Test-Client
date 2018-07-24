<template>
  <div>
    <h1>Add a playlist</h1>
    <playlist-form @playlistPublished="savePlaylist"></playlist-form>
  </div>
</template>

<script>
import { ADD_PLAYLIST_MUTATION } from '@/graphql';
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
      const result = await this.$apollo.mutate({
        mutation: ADD_PLAYLIST_MUTATION,
        variables: {
          name: playlist.title,
          genre: playlist.genre,
        },
      });

      this.$eventBus.$emit('flash', {
        type: 'success',
        message: 'Playlist created',
      });

      // clear cache
      Object.values(this.$apollo.provider.clients)
        .forEach(client => client.cache.reset());

      this.$router.push(`/playlist/edit/${result.data.addPlaylist.id}`);
    },
  },
};
</script>

<style>
</style>
