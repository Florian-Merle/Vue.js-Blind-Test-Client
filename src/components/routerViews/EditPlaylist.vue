<template>
  <div>
    <h1>Edit a playlist</h1>
    <playlist-form v-bind:playlistData="playlist" @playlistPublished="savePlaylist"></playlist-form>
  </div>
</template>

<script>
import { PLAYLIST_QUERY, EDIT_PLAYLIST_MUTATION } from '@/graphql';
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
        mutation: EDIT_PLAYLIST_MUTATION,
        variables: {
          id: this.playlist.id,
          name: playlist.name,
          genre: playlist.genre,
        },
        update: (store, { data: { updatePlaylist } }) => {
          try {
            const query = {
              query: PLAYLIST_QUERY,
              variables: {
                id: this.playlist.id,
              },
            };

            // manages cache
            const data = store.readQuery(query);
            data.playlist = updatePlaylist;

            store.writeQuery({ ...query, data });
          } catch(e) { console.log(e) } // eslint-disable-line
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
      query: PLAYLIST_QUERY,
      variables: {
        id: this.$route.params.id,
      },
    });

    this.playlist = Object.assign({}, this.playlist, result.data.playlist);
  },
};
</script>

<style>
</style>
