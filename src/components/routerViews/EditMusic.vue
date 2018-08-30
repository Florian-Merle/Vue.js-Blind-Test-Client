<template>
  <div>
    <h1>Edit a music</h1>
    <music-form v-bind:musicData="music" @musicPublished="saveMusic"></music-form>
  </div>
</template>

<script>
import { MUSIC_QUERY, EDIT_MUSIC_MUTATION } from '@/graphql';
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
    async saveMusic(music) {
      this.music = {
        id: this.music.id,
        name: music.name,
        url: music.url,
        wrongAnswers: music.wrongAnswers,
      };

      await this.$apollo.mutate({
        mutation: EDIT_MUSIC_MUTATION,
        variables: this.music,
        update(store, { data: { editMusic } }) {
          try {
            const query = {
              query: MUSIC_QUERY,
              variables: { id: editMusic.id },
            };

            // manages cache
            const data = store.readQuery(query);
            data.music = editMusic;
            store.writeQuery({ ...query, data });
          } catch(e) {} // eslint-disable-line
        },
      });

      this.$eventBus.$emit('flash', {
        type: 'success',
        message: 'Music updated',
      });
    },
  },
};
</script>
