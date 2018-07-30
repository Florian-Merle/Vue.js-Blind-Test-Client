<template>
  <div class="uk-card uk-card-default">
    <div class="uk-card-header">
      <h3 class="uk-card-title">{{ playlist.name }}</h3>
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
import { PLAYLIST_QUERY } from '@/graphql';

export default {
  name: 'ViewPlaylist',
  data() {
    return {
      playlist: {},
    };
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
