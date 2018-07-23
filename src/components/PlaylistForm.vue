<template>
  <div>
    <div class="uk-margin">
      <input class="uk-input" type="text" placeholder="Title" v-model="playlist.title">
    </div>
    <div class="uk-margin">
      <input class="uk-input" type="text" placeholder="Genre" v-model="playlist.genre">
    </div>
    <input class="uk-button uk-button-default" type="submit" value="Create" v-on:click="publish()">
  </div>
</template>

<script>
export default {
  name: 'PlaylistForm',
  data() {
    return {
      playlist: {
        title: '',
        genre: '',
      },
    };
  },
  props: ['playlistData'],
  watch: {
    playlistData: {
      immediate: true,
      handler(newVal) {
        if (!newVal) { return; }
        this.playlist = newVal;
      },
    },
  },
  methods: {
    publish() {
      this.$emit('playlistPublished', this.playlist);
    },
  },
};
</script>

<style scoped>
</style>
