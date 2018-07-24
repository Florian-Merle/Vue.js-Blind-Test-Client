<template>
  <div>
    <h1>Add a playlist</h1>
    <playlist-form @playlistPublished="savePlaylist"></playlist-form>
  </div>
</template>

<script>
import { ALL_PLAYLISTS_QUERY, ADD_PLAYLIST_MUTATION } from '@/graphql';
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
        update(store, { data: { addPlaylist } }) {
          try {
            // manages cache
            const data = store.readQuery({ query: ALL_PLAYLISTS_QUERY });
            data.playlists.push(addPlaylist);
            store.writeQuery({ query: ALL_PLAYLISTS_QUERY, data });
          } catch(e) {} // eslint-disable-line
        },
      });

      this.$eventBus.$emit('flash', {
        type: 'success',
        message: 'Playlist created',
      });

      this.$router.push(`/playlist/edit/${result.data.addPlaylist.id}`);
    },
  },
};
</script>

<style>
</style>
