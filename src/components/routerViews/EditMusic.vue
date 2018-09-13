<template>
  <div>
    <h1>Edit a music</h1>
    <music-form
      v-bind:musicData="music"
      @musicPublished="saveMusic"
      @musicRemoved="deleteMusic">
    </music-form>
  </div>
</template>

<script>
import { MUSIC_QUERY, EDIT_MUSIC_MUTATION, DELETE_MUSIC_MUTATION, PLAYLIST_QUERY_WITH_MUSICS } from '@/graphql';
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
    async deleteMusic() {
      const playlistId = this.$route.params.playlistId;

      await this.$apollo.mutate({
        mutation: DELETE_MUSIC_MUTATION,
        variables: { id: this.music.id },
        update(store, { data: { deleteMusic } }) {
          try {
            const query = {
              query: PLAYLIST_QUERY_WITH_MUSICS,
              variables: { id: playlistId },
            };

            // manages cache
            const data = store.readQuery(query);
            data.playlist.musics = _.filter(
              data.playlist.musics,
              filteredMusic => filteredMusic.id !== deleteMusic.id,
            );
            store.writeQuery({ ...query, data });
          } catch(e) {} // eslint-disable-line
        },
      });

      // flash & redirect
      this.$eventBus.$emit('flash', {
        type: 'success',
        message: 'Music deleted',
      });

      this.$router.go(-1);
    },
  },
};
</script>
