<template>
  <div>
    <h3>Musics</h3>

    <div class="uk-margin">
      <router-link class="playlist-item" :to="{ path: `/music/add/${playlist.id}` }">
        <div class="uk-button uk-button-default">Add a music</div>
      </router-link>
    </div>

    <div class="uk-child-width-1-1@s uk-grid-match" uk-grid>
      <div v-for="(music, index) in playlist.musics"
        v-bind:key="index">
        <router-link class="music-item" :to="{ path: `/music/edit/${playlist.id}/${music.id}` }">
          <div class="uk-card uk-card-default uk-card-hover uk-card-body">
            <h3 class="uk-card-title">{{ music.name }}</h3>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import MusicForm from '@/components/MusicForm';

export default {
  name: 'MusicsForm',
  props: ['playlist'],
  components: {
    musicForm: MusicForm,
  },
};
</script>

<style scoped>
a.music-item {
  text-decoration: none;
}
</style>
