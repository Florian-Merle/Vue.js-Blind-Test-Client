<template>
  <div>
    <h1>Add a music</h1>
    <music-form @musicPublished="saveMusic"></music-form>
  </div>
</template>

<script>
import MusicForm from '@/components/MusicForm';
import { ADD_MUSIC_MUTATION, ADD_MUSIC_TO_PLAYLIST_MUTATION, PLAYLIST_QUERY_WITH_MUSICS } from '@/graphql';

export default {
  name: 'AddMusic',
  components: {
    musicForm: MusicForm,
  },
  methods: {
    async saveMusic(music) {
      const result = await this.$apollo.mutate({
        mutation: ADD_MUSIC_MUTATION,
        variables: {
          name: music.name,
          url: music.url,
          wrongAnswers: music.wrongAnswers,
        },
      });

      await this.$apollo.mutate({
        mutation: ADD_MUSIC_TO_PLAYLIST_MUTATION,
        variables: {
          idMusic: result.data.addMusic.id,
          idPlaylist: this.$route.params.playlistId,
        },
        update(store, { data: { addMusicToPlaylist } }) {
          try {
            const query = {
              query: PLAYLIST_QUERY_WITH_MUSICS,
              variables: { id: addMusicToPlaylist.id },
            };

            // manages cache
            const data = store.readQuery(query);
            data.playlist.musics.push(result.data.addMusic);
            store.writeQuery({ ...query, data });
          } catch(e) {} // eslint-disable-line
        },
      });

      this.$eventBus.$emit('flash', {
        type: 'success',
        message: 'Music created',
      });

      this.$router.push(`/music/edit/${this.$route.params.playlistId}/${result.data.addMusic.id}`);
    },
  },
};
</script>
