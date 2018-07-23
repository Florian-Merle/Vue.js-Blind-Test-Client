<template>
  <div class="uk-card uk-card-default">
    <div class="uk-card-header">
      <h3 class="uk-card-title">{{ playlist.title }}</h3>
    </div>

    <div class="uk-card-body">
      <p>Genre: {{ playlist.genre }}</p>
    </div>

    <div class="uk-card-footer">
      <router-link
        class="uk-button uk-button-default"
        :to="{ path: playPath }"
        >Play</router-link>

      <router-link
        class="uk-button uk-button-default"
        :to="{ path: editPath }"
        >Edit</router-link>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag';

export default {
  name: 'ViewPlaylist',
  data() {
    return {
      playlist: {},
    };
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
  computed: {
    playPath() {
      return `/playlist/play/${this.playlist.id}`;
    },
    editPath() {
      return `/playlist/edit/${this.playlist.id}`;
    },
  },
};
</script>
