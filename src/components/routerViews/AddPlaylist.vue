<template>
  <div>
    <h1>Add a playlist</h1>
    <playlist-form @playlistPublished="savePlaylist"></playlist-form>
  </div>
</template>

<script>
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
    savePlaylist(playlist) {
    },
  },
};
</script>

<style>
</style>
