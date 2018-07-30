<template>
  <div>
    <div class="uk-margin">
      <input class="uk-input" type="text" placeholder="Title" v-model="playlist.name">
    </div>
    <div class="uk-margin">
      <input class="uk-input" type="text" placeholder="Genre" v-model="playlist.genre">
    </div>
    <input class="uk-button uk-button-default"
      type="submit"
      v-model="action"
      v-on:click="publish()">
  </div>
</template>

<script>
export default {
  name: 'PlaylistForm',
  data() {
    return {
      playlist: {
        name: '',
        genre: '',
      },
      create: true,
    };
  },
  props: ['playlistData'],
  watch: {
    playlistData: {
      immediate: true,
      handler(newVal) {
        if (!newVal) { return; }
        this.playlist = newVal;
        this.create = false;
      },
    },
  },
  methods: {
    publish() {
      this.$emit('playlistPublished', this.playlist);
    },
  },
  computed: {
    action() {
      return this.create ? 'Create' : 'Update';
    },
  },
};
</script>

<style scoped>
</style>
