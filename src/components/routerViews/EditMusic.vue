<template>
  <div>
    <h1>Edit a music</h1>
    <music-form v-bind:musicData="music" @musicPublished="saveMusic"></music-form>
  </div>
</template>

<script>
import { MUSIC_QUERY } from '@/graphql';
import MusicForm from '@/components/MusicForm';
import _ from 'lodash';

export default {
  name: 'EditMusic',
  data() {
    return {
      music: {},
    };
  },
  components: {
    musicForm: MusicForm,
  },
  async created() {
    const result = await this.$apollo.query({
      query: MUSIC_QUERY,
      variables: {
        id: this.$route.params.id,
      },
    });

    this.music = _.cloneDeep(result.data.music);
  },
  methods: {
    saveMusic() {

    },
  },
};
</script>
