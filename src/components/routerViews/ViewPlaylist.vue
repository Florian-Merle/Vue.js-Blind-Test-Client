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

      <div
        class="uk-button uk-button-default"
        v-on:click="deletePlaylist"
        >Delete</div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import { PLAYLIST_QUERY, DELETE_PLAYLIST_MUTATION, ALL_PLAYLISTS_QUERY } from '@/graphql';

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
  methods: {
    async deletePlaylist() {
      // eslint-disable-next-line
      let shouldDelete = confirm('Do you realy want to delete this playlist ?');

      if (!shouldDelete) {
        return;
      }

      await this.$apollo.mutate({
        mutation: DELETE_PLAYLIST_MUTATION,
        variables: {
          id: this.playlist.id,
        },
        update(store, { data: { deletePlaylist } }) {
          try {
            const query = {
              query: ALL_PLAYLISTS_QUERY,
            };

            // manages cache
            const data = store.readQuery(query);
            data.playlists = _.filter(
              data.playlists,
              filteredPlaylist => filteredPlaylist.id !== deletePlaylist.id,
            );

            store.writeQuery({ ...query, data });
          } catch(e) {} // eslint-disable-line
        },
      });

      // flash & redirect
      this.$eventBus.$emit('flash', {
        type: 'success',
        message: 'Playlist deleted',
      });

      this.$router.push('/');
    },
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
