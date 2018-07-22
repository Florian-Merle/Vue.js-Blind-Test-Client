<template>
  <div>
    <input type="text" placeholder="Title" v-model="playlist.title">
    <input type="text" placeholder="Genre" v-model="playlist.genre">
    <input type="submit" value="Create" v-on:click="publish()">
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
input {
  box-sizing: border-box;
  display: block;
  margin: 10px auto;
  padding: 5px;
  width: 60%;

  border: 1px solid #aaa;
  border-radius: 4px;
  outline: none;
}

input[type="text"]:focus {
  border: 1px solid #f08800;
}
</style>
