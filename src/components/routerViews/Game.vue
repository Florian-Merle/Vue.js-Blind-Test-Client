<template>
  <div>
    <h1>Play</h1>
  </div>
</template>

<script>
import { PLAYLIST_QUERY_WITH_MUSICS } from '@/graphql';

export default {
  name: 'Game',
  data() {
    return {
      playlist: {},
    };
  },
  async created() {
    const result = await this.$apollo.query({
      query: PLAYLIST_QUERY_WITH_MUSICS,
      variables: {
        id: this.$route.params.id,
      },
    });

    this.playlist = Object.assign({}, this.playlist, result.data.playlist);
  },
};
</script>
